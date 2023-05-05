// Save options to storage
function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      webhookUrl: document.querySelector("#webhook-url").value
    });
  }
  
  // Restore options from storage
  function restoreOptions() {
    browser.storage.sync.get("webhookUrl").then((res) => {
      document.querySelector("#webhook-url").value = res.webhookUrl || '';
    });
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("#options-form").addEventListener("submit", saveOptions);
  