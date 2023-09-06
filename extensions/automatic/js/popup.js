/************************************************************
 * 
 * 插件输入绑定
 * 
 ************************************************************/
const gatherer = Gatherer({GenerateLink:GenerateLink});
let taskChain = [];

let analysyseData = [];

chrome.storage.local.get("params").then((item)=> { });

document.querySelector('#generateBtn').addEventListener("click", function(event) {
    // 1. 解析出参数
    let params = getParams();
    if(!params.userid && !params.appid && !params.roomid) {
      console.warn('参数未输入,中断任务');
      return;
    }
    taskChain = getTaskChain(params);
    // 2. 启动监听；1. 监听页签，给日志数据加标记；2. 监听bg 分析结果
    chrome.tabs.onUpdated.addListener(handlerTabsUpdated);
    chrome.runtime.onMessage.addListener(handlerGatheringEnd);
    gatherer.setChain(taskChain);
    gatherer.startTask(createTab);
});

function handlerTabsUpdated(tabId, changeInfo) {
  if(changeInfo.status == 'complete') {
    chrome.tabs.sendMessage(tabId, {name: gatherer.getCurrentGatherer().name, type: 'content_script'}).then(rsp=> {
        console.log("send gatherer name success");
    });
  }
}

function handlerGatheringEnd(rsp, sender, sendResponse) {
  if(rsp.type !== 'popup') {
    return;
  }
  console.warn('[popup]', rsp);
  gatherer.getCurrentGatherer()['result'] = rsp.result;// 缓存数据
  chrome.tabs.query({index: 0}).then((tbs)=> {
    chrome.tabs.remove(tbs[0].id).then(()=> {
      console.log('[remove tab] success');
      if(!gatherer.nextGathering(createTab)) {
        // 回收资源
        console.log(gatherer.getChain());
      }
    })
  })
  // 使用sendResponse向消息源回传响应消息
  sendResponse({
    type: 'success'
  });
  return true;
}

function getParams() {
  const $filterText = document.querySelector('#filterText');
  const values = $filterText.value.split('\n');
  let params = {};
  values.forEach(item=> {
      let param = item.split(':').map(i=> i.trim());
      if(param[1]) {
          params[param.splice(0, 1)] = '' + param.join(':'); //时间格式，要把":"重新加回去
      }
  });
  return params;
}

function createTab(url) {
  chrome.tabs.create({
      url: url,
      index: 0,
      active: false,
  }).then(tab=> {
      // 标签创建成功后，可能content_script还没加载上，向注入脚本传信息回报错
  });
}

function getTaskChain(params) {
  let { startTime, endTime } = params;
  console.log('[startTime, endTime]', startTime, endTime);
  delete params.startTime;
  delete params.endTime;
  // 简单查询，只涉及user、room过滤
  let simpleOptions = {};
  simpleOptions['appid'] = params.appid;
  simpleOptions['userid'] = params.userid;
  simpleOptions['roomid'] = params.roomid;
  return [{
    name: 'ROOM_AND_STREAM_STATE_QUERY',
    geneFn: 'generateRoomOrStreamStateLink',
    arguments: [{
      params: simpleOptions,
      startTime,
      endTime,
    }],
    links: [],
    result: [],
    cb: null,
    // link: generateRoomOrStreamStateLink()
  },
  {
    name: 'PREVIEW_STATE_QUERY',
    geneFn: 'generateRoomOrPreviewOrDeviceState',
    arguments: [{
      params: simpleOptions,
      startTime,
      endTime,
    }],
    links: [],
    result: [],
    cb: null,
    // link: generatePreviewStateLink()
  },{
    name: 'OSINFO_SDKVER_QUERY',
    geneFn: 'generateOsinfoOrSdkVer',
    arguments: [{
      params: simpleOptions,
      startTime,
      endTime,
    }],
    links: [],
    result: [],
    cb: null,
  },
  // {
  //   name: 'PUBLISHER_DEVICE_STATE_QUERY',
  //   geneFn: 'generagePublisherOrDeviceState',
  //   arguments: [{
  //     params: simpleOptions,
  //     startTime,
  //     endTime,
  //   }],
  //   links: [],
  //   result: [],
  //   cb: null,
  // },{
  //   name: 'PUBLISHER_SIMPLE_QUERY',
  //   geneFn: 'generatePusherSimpleLink',
  //   arguments: [{
  //     params: simpleOptions,
  //     startTime: 0, // 需要按前面的计算时间
  //     endTime: 0,
  //   }],
  //   links: [],
  //   result: [],
  //   cb: null,
  // }
  ];
}



