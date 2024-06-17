chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "clicked_browser_action") {
      // Perform actions in response to the message
      console.log("Browser action clicked!");
    }
  });
  