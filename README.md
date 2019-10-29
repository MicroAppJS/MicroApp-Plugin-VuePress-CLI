# Micro APP Plugin - VuePress CLI

[Plugin] adapter vuepress cli plugin.

适配集成 vuepress 配置. 用于 `@micro-app/core`.

[![Coverage Status][Coverage-img]][Coverage-url]
[![CircleCI][CircleCI-img]][CircleCI-url]
[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[Coverage-img]: https://coveralls.io/repos/github/MicrosApp/MicroApp-Plugin-VuePress-CLI/badge.svg?branch=master
[Coverage-url]: https://coveralls.io/github/MicrosApp/MicroApp-Plugin-VuePress-CLI?branch=master
[CircleCI-img]: https://circleci.com/gh/MicrosApp/MicroApp-Plugin-VuePress-CLI/tree/master.svg?style=svg
[CircleCI-url]: https://circleci.com/gh/MicrosApp/MicroApp-Plugin-VuePress-CLI/tree/master
[npm-img]: https://img.shields.io/npm/v/@micro-app/plugin-vuepress-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-app/plugin-vuepress-cli
[download-img]: https://img.shields.io/npm/dm/@micro-app/plugin-vuepress-cli.svg?style=flat-square
[download-url]: https://npmjs.org/package/@micro-app/plugin-vuepress-cli

## Install

```sh
yarn add @micro-app/plugin-vuepress-cli
```

or

```sh
npm install -S @micro-app/plugin-vuepress-cli
```

## Usage

### 在项目 `根目录` 的 `micro-app.config.js` 文件中配置

```js
module.exports = {
    // ...

    plugins: [ // 自定义插件
        [ '@micro-app/plugin-vuepress-cli', {
            // default config
            {

            }
        } ],
    ],
};
```


### 创建 `micro-app.vuepress.config.js` 文件, 并如下配置:

```js
{ // temp demo
    title: 'Micro App',
    sourceDir: 'docs',
    sidebars: {
        '/guide/': {
            '/': '导航',
            '/en/': 'Guide',
        },
    },
    navs: {
        '/guide/': {
            '/': '指南',
            '/en/': 'Guide',
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
        repo: 'MicrosApp/MicroApp-Core',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'MicrosApp/MicroApp-Core',
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
}
```
