function getCurrentUrl (cb) {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function (tabs) {
        cb(tabs[0].url);
    });
}

function createTab (url) {
    chrome.tabs.create({
        url : url
    });
}

function localStorageGet(items, cb) {
    chrome.storage.local.get(items, cb);
}

function localStorageSet(items, cb) {
    chrome.storage.local.set(items, cb);
}

function localStorageClear(cb) {
    chrome.storage.local.clear(cb || function () {});
}
