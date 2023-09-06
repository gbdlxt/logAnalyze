function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
    // window.open("www.hao123.com", "_blank");
    console.warn(time);
  }
   
  setInterval(updateTime, 1000);

  document.querySelector('#goLink').addEventListener('click', ()=> {
    chrome.tabs.create({
      url: "https://www.hao123.com"
    })
  })