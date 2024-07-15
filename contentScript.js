chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request.targetUrl){
        alert("You Are Accessing Restricted Site")
        return sendResponse({status:"done"})
        
    } else {
        return;
    }
})