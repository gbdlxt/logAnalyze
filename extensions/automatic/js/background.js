// importScripts('./a.js'); //https://ithelp.ithome.com.tw/questions/10208733
importScripts('./parseHits.js'); // 导入分析

// 接收到拦截的响应，将器发送到requestUrl变量配置的地址上
chrome.runtime.onMessage.addListener((rsp, sender, sendResponse)=> {
  if(rsp.type !== 'background') {
    return;
  }
  const hits = rsp.data.result.rawResponse.hits.hits;
  const name = rsp.name;
  
  if(hits.length) {
    console.warn('[background onMessage]', name, hits);
    // 各种算法分析hits
    setLogHits(hits);
    const result = analysyse(getLogHits(), [publisherStateUpdateError]);
    // const result = analysyse(hits, [roomStateChangedError]);
    chrome.runtime.sendMessage({
      type: 'popup',
      result: {
        hits,
        result,
      }
    }, {}, function(res) {
      // console.warn('[send to popup]', res)
    });
  }
  // 使用sendResponse向消息源回传响应消息
  sendResponse({
    type: 'success'
  });
  return true;
});

