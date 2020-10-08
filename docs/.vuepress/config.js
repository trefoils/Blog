
let nav = require("./router-config/nav");

const sidebar = require("./router-config/sidebar");

module.exports = {
  title: "Trefoil",
  description: "井底之蛙，怎知天大。孤峰之脚，方知人小",
  //监听文件变化
  extraWatchFiles: [
    '.vuepress/router-config/nav.js', 
    '.vuepress/router-config/sidebar.js'
  ],
  
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
  },
  footer: 12
}