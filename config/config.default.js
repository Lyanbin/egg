'use strict';
const path = require('path');
module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1524196707046_9450';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    config.static = {
        // maxAge: 31536000,
        prefix: '/',
        dir: [
            path.join(appInfo.baseDir, 'app/public'),
            path.join(appInfo.baseDir, 'app/view/reg')
        ],
        dynamic: true,
        preload: false,
        maxAge: 31536000,
        buffer: true
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://sp1.baidu.com/70cHazva2gU2pMbgoY3K/search/kgjsonstar?pn=0&rn=30&fr=img&ie=UTF-8&oe=UTF-8&isWise=1&kgtype=star&tn=kgjson&word=%E7%8E%8B%E5%B0%BC%E7%8E%9B&ssl=1&_=1524203626383',
    };

    return config;
};