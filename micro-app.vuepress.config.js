'use strict';

module.exports = {
    title: 'Micro App',
    sourceDir: 'docs',
    sidebars: {
        '/guide/': {
            '/': [ '导航', '1', '2', '3', '4' ],
            '/en/': 'Guide',
        },
        '/guide1/': '',
    },
    navs: {
        '/guide/': {
            '/': '指南',
            '/en/': 'Guide',
        },
        '/config/': {
            '/': '配置参考',
            '/en/': 'Config Reference',
        },
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            description: '🔌 多模块可插拔插件的微应用框架',
            label: '简体中文',
            selectText: '选择语言',
            lastUpdated: '上次编辑时间',
            repoLabel: '查看源码',
            editLinkText: '在 GitHub 上编辑此页',
        },
        '/en/': {
            lang: 'en-US',
            description: '🔌 Pluggable Micro Application Framework',
            label: 'English',
            selectText: 'Languages',
            lastUpdated: 'Last Updated',
            repoLabel: 'View Code',
            editLinkText: 'Edit this page on GitHub',
        },
    },
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'MicroAppJS/MicroApp-Core',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'MicroAppJS/MicroApp-Core',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 3,
        // algolia: {
        //     indexName: "cli_vuejs",
        //     apiKey: "f6df220f7d246aff64a56300b7f19f21"
        // },
        // search: false,
        // searchMaxSuggestions: 10,
        // displayAllHeaders: true // 默认值：false
    },
};
