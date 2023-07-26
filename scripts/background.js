// background.js
chrome.webRequest.onBeforeRequest.addListener(
    async(details) => {
        // 添加一个特殊的查询参数作为标记，如果请求中已经包含了这个标记，就不再处理
        if (details.url.indexOf("aisubtitle.hdslb.com/bfs/ai_subtitle/prod") != -1 && details.url.indexOf("mySpecialFlag") == -1) { 
            console.log("URL triggering outside message: ", details.url); 
            // 在请求的 URL 中添加你的特殊标记
            let fetchUrl = details.url + (details.url.includes("?") ? "&" : "?") + "mySpecialFlag";
            let response = await fetch(fetchUrl, {mode: 'no-cors'});
            let data = await response.json();
            // 拿到字幕json把文本拼成string存起来
            let subtitleString = "";
            for (let item of data.body) {
                subtitleString += item.content + "\n";
            }
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {subtitleData: subtitleString});
            });
        }
    },
    {urls: ["<all_urls>"]}
);
