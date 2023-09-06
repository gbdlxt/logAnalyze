window.addEventListener("message", (e) => {
  if(!e.data || Object.keys(e.data).length === 0 ){
    return;
  }
  
  let responseDataList = null;
  // 使用try-catch兼容接收到的message格式不是对象的异常情况
  
  try{
    responseDataList = JSON.parse(e.data.response);
    // 发消息给background.js，并接收其回复
    chrome.runtime.sendMessage({
      data: responseDataList, 
      name: window['gathererName'], 
      type: 'background'}, {}, function(res){
      // console.warn('[send hits to background]', res)
    })
  }catch(e){
    // console.error('获取的数据有误，请联系管理员！');
  }

}, false);

// 
chrome.runtime.onMessage.addListener((request) => {
  if(request.type !== 'content_script') {
    return;
  }
  window['gathererName'] = request.name;
  return Promise.resolve({ response: "from content script" });
});