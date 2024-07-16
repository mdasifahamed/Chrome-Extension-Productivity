chrome.runtime.onInstalled.addListener(()=>{
    const urlStorage = [];

    chrome.storage.local.set({urlStorage:urlStorage},()=>{
        if(chrome.runtime.lastError){
            console.log(chrome.runtime.lastError);
            return false
        }else {
            return true;
        }
    })
})

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const blockUrls = await chrome.storage.local.get(['urlStorage']); 
    blockUrls.urlStorage.forEach(element => {
      if(element.includes(details.url)){
          chrome.tabs.sendMessage(details.tabId, { message: true,tabId:details.tabId ,url:details.url}).catch((err)=>(console.log(err)));
          console.log("Message Sent with tab id ", details.tabId);
      }
    });
    
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message) {
    chrome.tabs.executeScript(message.tabId, {file: "contentScript.js"});
  }
})

