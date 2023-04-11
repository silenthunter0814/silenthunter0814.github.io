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
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>'
        },
        link: 'https://space.bilibili.com/1551957972'
      },
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