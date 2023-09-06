
const TIME_INDEX = 0;
const ROOMID_INDEX = 1;
const VIDEO_INDEX = 9;
const SECOND_INDEX = 3;
const RESOLUTION_INDEX = 5;
const APPID = 886286150;

let classTime, startTime, endTime, appid, roomid, timeBegin, timeEnd, pullUser;


let paths = {
    title: '', //标题
    videoPath: '',
    recordPath: '', //生成查录制时间的链接
    pusherStatePath: '', // room and pusherState
    playerStatePath: '', // room and playState
    deviceChangePath: '', // room and deviceChange
    starMapPath: '', // 星图
    topologyPath: '', // 流拓扑
    pusherOrRefreshPath: '', // 推流 & 刷新 针对推流异常，刷新解决
    pusherOrRefresh: [], //结果
    playerOrRefreshPath: '', // 拉流 & 刷新 针对拉流异常，刷新解决
    playerOrRefresh: [],
    mediaNodePath: '', // 媒体节点连接
};

/**
 * 点击“生成按钮连接”
 */
function onGeneratePath() {
    let question = document.querySelector('textarea').value.split('\t');
    //new Date("2023-7-26 22:00").getTime() - (30 * 60 * 1000)
    classTime = new Date(question[TIME_INDEX].split(',').join('')).getTime();
    startTime = new Date(classTime - (30 * 60 * 1000)).toISOString(); // 课堂开始时间提前半小时
    endTime = new Date(classTime + (90 * 60 * 1000)).toISOString(); // 课堂开始时间延后1.5小时
    appid = APPID;
    roomid = question[ROOMID_INDEX].split(',').join('');
    timeBegin = classTime;
    timeEnd = new Date(classTime + (90 * 60 * 1000)).getTime();

    paths.title = genenrateTitle(question);
    paths.videoPath = genenrateVideoPath(question);
    paths.recordPath = generateRecordPath(startTime, endTime, appid, roomid);
    paths.pusherStatePath  = generatePusherStatePath(startTime, endTime, appid, roomid);
    paths.playerStatePath  = generatePlayerStatePath(startTime, endTime, appid, roomid);
    paths.deviceChangePath = generateDeviceChangePath(startTime, endTime, appid, roomid);
    paths.starMapPath = generateStarMapPath(appid, roomid, timeBegin, timeEnd);
    paths.pusherOrRefreshPath = generatePusherOrRefresh(startTime, endTime, appid, roomid);
    paths.playerOrRefreshPath = generatePlayerOrRefresh(startTime, endTime, appid, roomid);
    // generateTopologyPath()

    console.log('[onGeneratePath]', paths);
    render(paths);
}

function onGenerateMediaNodePath() {
    const streamID = document.querySelector('#mediaNodePath_textArea').value;
    paths.mediaNodePath = generateMediaNodePath(startTime, endTime, appid, roomid, streamID);
    document.querySelector('#mediaNodePath').value = paths.mediaNodePath;
    document.querySelector('#mediaNodePath_link').setAttribute('href', paths.mediaNodePath);
    console.log('[onGenerateMediaNodePath]', paths);
}

/**
 * 点击“生成 Boss 流链路 的链接”按钮
 */
function onGeneratePullStreamPath() {
    let topologyArea = document.querySelector('#topologyPath_textArea').value.split('+');
    const streamID = topologyArea[0];
    pullUser = topologyArea[1];
    paths.topologyPath = generateTopologyPath(appid, streamID, timeBegin, timeEnd, pullUser);
    
    document.querySelector('#topologyPath').value = paths.topologyPath;
    document.querySelector('#topologyPath_link').setAttribute('href', paths.topologyPath);
    console.log('[onGeneratePullStreamPath]', paths);
}

function render(paths) {
    const $title = document.querySelector('.paths h2');
    $title.innerHTML = paths.title;

    document.querySelector('#videoPath').value = paths.videoPath;
    document.querySelector('#videoPath_link').setAttribute('href', paths.videoPath);

    document.querySelector('#recordPath').value = paths.recordPath;
    document.querySelector('#recordPath_link').setAttribute('href', paths.recordPath);

    document.querySelector('#pusherStatePath').value = paths.pusherStatePath;
    document.querySelector('#pusherStatePath_link').setAttribute('href', paths.pusherStatePath);

    document.querySelector('#playerStatePath').value = paths.playerStatePath;
    document.querySelector('#playerStatePath_link').setAttribute('href', paths.playerStatePath);

    document.querySelector('#deviceChangePath').value = paths.deviceChangePath;
    document.querySelector('#deviceChangePath_link').setAttribute('href', paths.deviceChangePath);

    document.querySelector('#starMapPath').value = paths.starMapPath;
    document.querySelector('#starMapPath_link').setAttribute('href', paths.starMapPath);

    document.querySelector('#pusherOrRefresh_link').setAttribute('href', paths.pusherOrRefreshPath);
    document.querySelector('#playerOrRefresh_link').setAttribute('href', paths.playerOrRefreshPath);
    // $inputs[5].value = paths.recordPath;
    // $a[5].setAttribute('href', paths.recordPath);
}

function genenrateTitle(question) {
    return question[SECOND_INDEX] + ', ' + question[RESOLUTION_INDEX];
}

function genenrateVideoPath(question) {
    return question[VIDEO_INDEX];
}

/**
 * 生成查录制时间的链接
 * @param {*} startTime 2023-07-17T16:00:00.000Z
 * @param {*} endTime 2023-07-18T15:30:00.000Z
 * @param {*} appid 886286150
 * @param {*} roomid 4247279
 * @returns 
 */
function generateRecordPath(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(app_id,operate,task_id,room_id,origin_req),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a1465460-f021-11eb-b67b-a151f09c199f,key:app_id,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(app_id:${appid}))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a1465460-f021-11eb-b67b-a151f09c199f,key:operate,negate:!f,params:(query:%2Fstart),type:phrase),query:(match_phrase:(operate:%2Fstart)))),index:a1465460-f021-11eb-b67b-a151f09c199f,interval:auto,query:(language:lucene,query:'room_id:%22${roomid}%22'),sort:!(!('@timestamp',desc)))`;
}
// document.body.textContent = generateRecordPath(new Date('2023-7-26 21:30').toISOString(), new Date('2023-7-26 23:30').toISOString(), 886286150, '4338922')

// document.body.textContent = generateRecordPath('2023-07-17T16:00:00.000Z', '2023-07-18T15:30:00.000Z', 886286150, '4247279')

/**
 * 生成pusher state链接
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} appid 
 * @param {*} roomid 
 * @returns 
 */
function generatePusherStatePath(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'%22zm.al%22%20OR%20%22publisherStateUpdate%22%20OR%20%22unload%22%20OR%20%22%E9%A2%84%E8%A7%88%22%20OR%20%22zc.hcqr.0%22%20OR%20(%22zc.s.sss%22%20AND%20NOT%20%22call%22)'),sort:!(!('@timestamp',asc)))`;
}

// document.body.textContent = generatePusherStatePath('2023-07-17T16:00:00.000Z', '2023-07-18T15:30:00.000Z', 886286150, '4247279')

/**
 * 生成player state链接
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} appid 
 * @param {*} roomid 
 * @returns 
 */
function generatePlayerStatePath(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'%22zm.al%22%20OR%20%22playerStateUpdate%22%20OR%20%22unload%22%20OR%20%22zc.hcqr.0%22%20OR%20(%22zc.p.orss.1%22%20AND%20NOT%20%22call%22)'),sort:!(!('@timestamp',asc)))`;
}

// document.body.textContent = generatePlayerStatePath('2023-07-17T16:00:00.000Z', '2023-07-18T15:30:00.000Z', 886286150, '4247279')

/**
 * 生成 设备 & 设备切换 & 推流设备状态 连接
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} appid 
 * @param {*} roomid 
 * @returns 
 */
function generateDeviceChangePath(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'%22zm.al%22%20OR%20%22publisherStateUpdate%22%20OR%20%22unload%22%20OR%20%22%E9%A2%84%E8%A7%88%22%20OR%20%22device%22'),sort:!(!('@timestamp',asc)))`;
}

// document.body.textContent = generateAudioDeviceChangePath('2023-07-17T16:00:00.000Z', '2023-07-18T15:30:00.000Z', 886286150, '4247279')

/**
 * 生成流拓扑连接
 * @param {*} appid 
 * @param {*} streamID 
 * @param {*} timeBegin 
 * @param {*} timeEnd 
 * @param {*} pullUser 
 * @returns 
 */
function generateTopologyPath(appid, streamID, timeBegin, timeEnd, pullUser) {
    return `https://boss.zego.cloud/qualityOperate/fullLinkQuality?appId=${appid}&streamId=${streamID}&timeBegin=${timeBegin}&timeEnd=${timeEnd}&pullUserId=${pullUser}&refreshNow=true`;
}

// document.body.textContent = generateTopologyPath(886286150, '4338922_9586698', new Date('2023-07-26T13:00:00.000Z').getTime(), new Date('2023-07-26T15:30:00.000Z').getTime(), '7856759');

/**
 * 生成星图连接
 * @param {*} appid 
 * @param {*} roomid 
 * @param {*} timeBegin 
 * @param {*} timeEnd 
 * @returns 
 */
function generateStarMapPath(appid, roomid, timeBegin, timeEnd) {
    return `https://prism.zego.im/callInsight/search?app_id=${appid}&app_name=Lingoace%E7%9B%B4%E6%92%AD%E6%95%99%E5%AE%A4&room_id=${roomid}&user_id=&stream_id=&start_time=${timeBegin}&end_time=${timeEnd}&page=1&page_size=200&filter_error=false&no_room=false&stateName=callInsightUrl&searchText=${appid}&hasSelet=%5B%7B%22selectID%22%3A1,%22idValue%22%3A%22${roomid}%22,%22homeId%22%3A%5B%7B%22label%22%3A%22%E6%8E%A8%E6%B5%81%E6%88%BF%E9%97%B4ID%22,%22value%22%3A1%7D,%7B%22label%22%3A%22%E7%94%A8%E6%88%B7ID%22,%22value%22%3A2%7D,%7B%22label%22%3A%22%E6%B5%81ID%22,%22value%22%3A3%7D%5D%7D%5D&utc=8`;
}

// document.body.textContent = generateStarMapPath(886286150, '4338922', new Date('2023-07-26T13:00:00.000Z').getTime(), new Date('2023-07-26T15:30:00.000Z').getTime());

/**
 * 生成推流 & 刷新；针对推流异常，刷新解决
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} appid 
 * @param {*} roomid 
 * @returns 
 */
function generatePusherOrRefresh(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'%22unload%22%20OR%20%22NO_PUBLISH%22%20OR%20%22PUBLISH_REQUESTING%22'),sort:!(!('@timestamp',asc)))`
}

/**
 * 生成拉流 & 刷新； 针对拉流异常，刷新解决
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} appid 
 * @param {*} roomid 
 * @returns 
 */
function generatePlayerOrRefresh(startTime, endTime, appid, roomid) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'%22unload%22%20OR%20%22PLAY_REQUESTING%22%20OR%20%22NO_PLAY%22'),sort:!(!('@timestamp',asc)))`;
}

// 从日志异常时间计算视频异常时间 推流异常 & 刷新解决
function calcVideoTimeFromLogByPusherOrRefresh() {
    let area = document.querySelector('#pusherOrRefresh_area').value.split('从日志异常时间计算视频异常时间(针对推流异常，刷新解决)');
    const recordTime = new Date(area[0]).getTime();
    const data = JSON.parse(area[1]);
    data.hits.hits.forEach(hit=> {
        let gap = hit._source.server_time - recordTime;
        if(gap > 0) {
            console.log(formatSeconds(gap / 1000) + ' ~ ' + hit._source.time);
            paths.pusherOrRefresh.push(formatSeconds(gap / 1000) + ' ~ ' + hit._source.time);
        }else {
            paths.pusherOrRefresh.push(0);
        }
    });

    // document.querySelector('#pusherOrRefresh_video').value = [...new Set(paths.pusherOrRefresh)].join(';\n');
    document.querySelector('#pusherOrRefresh_video').innerHTML = [...new Set(paths.pusherOrRefresh)].map(item=> {
        return `<span>${item}</span>`
    }).join('<br>');
}

// 从视频异常时间计算日志异常时间
function calcVideoTimeFromLogByPlayerOrRefresh() {
    let area = document.querySelector('#playerOrRefresh_area').value.split('从日志异常时间计算视频异常时间(针对拉流异常，刷新解决)');
    const recordTime = new Date(area[0]).getTime();
    const data = JSON.parse(area[1]);
    data.hits.hits.forEach(hit=> {
        let gap = hit._source.server_time - recordTime;
        if(gap > 0) {
            paths.playerOrRefresh.push(formatSeconds(gap / 1000) + ' ~ ' + hit._source.time);
        }else {
            paths.playerOrRefresh.push(0);
        }
    });
    // document.querySelector('#playerOrRefresh_video').value = [...new Set(paths.playerOrRefresh)].join(';');
    document.querySelector('#playerOrRefresh_video').value = [...new Set(paths.playerOrRefresh)].map(item=> {
        return `<span>${item}</span>`
    }).join('<br>');
}

//秒数转化为时分秒
function formatSeconds(value){
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取余，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if(minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取余的分，获取分钟除以60取余的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result = "" + parseInt(secondTime) + "秒";

    if(minuteTime > 0) {
      result = "" + parseInt(minuteTime) + "分" + result;
    }
    if(hourTime > 0) {
      result = "" + parseInt(hourTime) + "小时" + result;
    }
    console.log('result',result);
    return result;
}

function generateMediaNodePath(startTime, endTime, appid, roomid, streamID) {
    return `https://logcenter-new.oa.zego.im/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'${startTime}',to:'${endTime}'))&_a=(columns:!(action,content,event,userid,client_time,action_detail,client_ip,ipip.country_name,ipip.city_name,ipip.region_name),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:roomid,negate:!f,params:(query:'${roomid}'),type:phrase),query:(match_phrase:(roomid:'${roomid}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'4f890960-f021-11eb-b67b-a151f09c199f',key:appid,negate:!f,params:(query:${appid}),type:phrase),query:(match_phrase:(appid:${appid})))),index:'4f890960-f021-11eb-b67b-a151f09c199f',interval:auto,query:(language:lucene,query:'(%22${streamID}%22%20AND%20%22sdp%22%20AND%20%22zc.s.bwh%22)'),sort:!(!('@timestamp',asc)))`;
}