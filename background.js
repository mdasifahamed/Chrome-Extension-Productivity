// const blockUrl ='https://www.facebook.com';

// chrome.webNavigation.onBeforeNavigate.addListener(async (details)=>{
//    if(details.url.includes(blockUrl)){
//         console.log(details.url)
//         chrome.tabs.sendMessage(details.tabId,{targetUrl:true},(response)=>{
//             console.log(details.tabId);
//             if(chrome.runtime.lastError){
//                 console.log(chrome.runtime.lastError)
//             }else{
//                 console.log(response)
//             }
//         });
//    }

// })

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