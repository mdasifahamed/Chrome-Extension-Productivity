

chrome.runtime.onMessage.addListener( async (message, sender, sendResponse) => {
    if (message.message) {
      document.body.innerText = "This Site is Blocked By You."
    }
  });