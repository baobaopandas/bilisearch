<h1 align="center">哔哩哔哩-基于记忆搜索视频工具</h1>
<p align="center">
    <a href="https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/LICENSE" style="text-decoration:none" >
        <img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="GitHub license"/>
    </a>
</p>

本项目针对个人需求，曾经看过一些视频，但是不记得标题只对里面的一句话很有印象，但是去搜索很难查到，如果是一个蛮久之前的印象，在历史记录中翻也很难在短时间内翻到。

作为强迫症就很抓狂，因此我打算写一个根据记忆搜索视频工具，来找回那些丢失的美好视频。

## 思路

- 作为插件形式，每看一个视频，就抓到字幕然后以键值对的形式 以发请求的形式存在远程服务器。然后在历史记录里嵌一个查询框（或者替代掉原先的），查询就是去原创服务器里的数据查询。

- 作为一次很多次调用，先通过api调用到历史记录，然后根据历史记录里的所有视频，都去读取一下字幕文件，然后都存在本地。每次调用使用前然后用户等自己更新完数据，在进行搜索。

## 想法

- [ ] 插件的方式存在浏览器缓存只能存5MB，要是浏览器和本机一直读取数据不符合规范。
- [ ] 读取字幕的请求怎么和读取视频详情的请求成对，保证在视频无字幕或者无自动字幕的时候不出现配对失误。字幕的请求例：https://aisubtitle.hdslb.com/bfs/ai_subtitle/prod/35804602211853868582f2c3e77360d2fc9bdcace9fd179498b?auth_key=1690380340-821e9485e03b40f6957b5c7da99979a5-0-5d4415184dd90248ea13778e16d989e4
- [ ] 给用户的体验是搜索速度较快 。
- [ ] 字幕会存在翻译错，自动字幕更多。因此必须合理选取搜索策略实现记忆搜索。

## 🍴目录

文件目录： 

- [ ] [插件入口](manifest.json)
- [ ] [脚本区]（scripts）
  - [ ] [监听器](scripts/background.js)
  - [ ] [前端展示](scripts/bilisearch.js)

## 已完成
- [x] 获取字幕显示在log
<p align="center">
    <img src="./pics/23-07-26.png" width="250" height="200">
</p>