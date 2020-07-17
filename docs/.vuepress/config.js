
let nav = require("./router-config/nav");

const sidebar = require("./router-config/side-bar");


module.exports = {
  title: "vuepress",
  description: "vuepress-des",
  themeConfig:{
    repo: 'trefoils/Blog',
    sidebarDepth: 2,
    smoothScroll: true,

    nav,
    sidebar,
    
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    lastUpdated: '上次更新时间'
  }
}