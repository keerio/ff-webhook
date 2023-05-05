// Function to send a webhook with bookmark data
function sendWebhook(url, title, webhookUrl) {
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        title: title
      })
    });
  }
  
  // Listen for bookmark events
  browser.bookmarks.onCreated.addListener((id, bookmark) => {
    browser.storage.sync.get("webhookUrl").then((res) => {
      const webhookUrl = res.webhookUrl;
      if (webhookUrl) {
        sendWebhook(bookmark.url, bookmark.title, webhookUrl);
      }
    });
  });
  