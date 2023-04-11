import mathjax3 from 'markdown-it-mathjax3';

export default {
  lang: 'en-US',
  title: 'Silent Hunter',  
  description: 'C语言从入门到大神系列',
  
  base: '/',

  lastUpdated: true,

  themeConfig: {
    logo: 'https://silenthunter0814.github.io/pub/assets/sh.png',

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide()
    },

    editLink: {
      pattern: 'https://github.com/silenthunter0814/silenthunter0814.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@silenthunter0814' },
      { icon: 'github', link: 'https://github.com/silenthunter0814/silenthunter0814.github.io' }
    ],

    footer: {
      message: 'This website is released under the MIT License.',
      copyright: 'Copyright © 2023 silenthunter0814 contributors'
    },
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
}
  
function nav() {
  return [ 
    { text: 'Guide', link: '/guide/roadmap', activeMatch: '/guide/' }, 
    {
      text: 'Issues',
      link: 'https://github.com/silenthunter0814/silenthunter0814.github.io/issues'
    },     
    {
      text: 'Youtube',
      link: 'https://www.youtube.com/@silenthunter0814'
    },
    {
      text: 'Bilibili',
      link: 'https://space.bilibili.com/1551957972'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '课程简介',
      collapsible: true,
      items: [
        { text: 'C语言学习路线图', link: '/guide/roadmap' }
      ]
    },
    {
      text: 'C 编程语言课程',
      collapsible: true,
      items: [
        { text: '01 C语言快速入门', link: '/guide/czh01' }
      ]
    },
    {
      text: 'Linux 操作系统课程',
      collapsible: true,
      items: [
        { text: '跟我学 Linux', link: '/guide/lfm' }
      ]
    },
    {
      text: 'Private Channel',
      collapsible: true,
      items: [
        { text: 'Markdown Notes', link: '/guide/markdown.notes.md' }
      ]
    }
  ]
}