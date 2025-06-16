let times = {};

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  const domain = new URL(tab.url).hostname;
  const now = Date.now();
  if (!times[domain]) times[domain] = 0;
  times[domain] += 1;

  chrome.storage.local.set({ times });
});