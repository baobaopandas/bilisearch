// bilisearch.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // 处理从background script发送过来的字幕数据
        console.log(request.subtitleData);
    }
);