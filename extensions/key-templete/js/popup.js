  chrome.storage.local.get("params").then((item)=> {
    document.querySelector('#appid').value = item.params.appid? item.params.appid: '';
    document.querySelector('#userID').value = item.params.userID? item.params.userID: '';
    document.querySelector('#roomid').value = item.params.roomid? item.params.roomid: '';
    document.querySelector('#startTime').value = item.params.startTime? item.params.startTime: '';
    document.querySelector('#endTime').value = item.params.endTime? item.params.endTime: '';
    document.querySelector('#streamID').value = item.params.streamID? item.params.streamID: '';
    document.querySelector('#pullUserID').value = item.params.pullUserID? item.params.pullUserID: '';
  });

  document.querySelector('#generatePath').addEventListener('click', ()=> {
    let appid = document.querySelector('#appid').value;
    let userID = document.querySelector('#userID').value;
    let roomid = document.querySelector('#roomid').value;
    let startTime = document.querySelector('#startTime').value;
    let endTime = document.querySelector('#endTime').value;
    let streamID = document.querySelector('#streamID').value;
    let pullUserID = document.querySelector('#pullUserID').value;
    let params = {
      appid, userID, roomid, startTime, endTime, streamID, pullUserID
    };
    chrome.storage.local.set({ params }).then(()=> {
      console.log('storage.local.set success');
    }, (e)=> {
      console.error(e);
    });
  });

  document.querySelector('#reset').addEventListener('click', ()=> {
    chrome.storage.local.clear().then(()=> {
      console.log('storage.local.clear success');
    });
  });