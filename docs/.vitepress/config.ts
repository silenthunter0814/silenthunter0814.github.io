export default {
  lang: 'en-US',
  title: 'silenthunter0814',
  description: 'C语言从入门到大神系列',

  lastUpdated: true,

  head: [
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-NX48EZF634'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NX48EZF634');`]
  ],

  themeConfig: {
    logo: '/gsh.png',
    nav: nav(),

    sidebar: {
      '/guide': sidebarGuide()
    },

    editLink: {
      pattern: 'https://github.com/silenthunter0814/silenthunter0814.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/silenthunter0814/silenthunter0814.github.io' }
    ],

    footer: {
      message: 'This website is released under the MIT License.',
      copyright: 'Copyright © 2023 silenthunter0814 contributors'
    },
  }
}

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-shadowsocks', activeMatch: '/guide/' },
    {
      text: 'youtube',
      link: 'https://www.youtube.com/@silenthunter0814'
    },
    {
      text: 'bilibili',
      link: 'https://space.bilibili.com/1551957972'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is Shadowsocks?', link: '/guide/what-is-shadowsocks' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Configuration',
      collapsible: true,
      items: [
        { text: 'Config Format', link: '/guide/configs' },
        { text: 'Advanced', link: '/guide/advanced' }
      ]
    },
    {
      text: 'Ciphers',
      collapsible: true,
      items: [
        {
          text: 'AEAD',
          link: '/guide/aead'
        },
        {
          text: 'Stream',
          link: '/guide/stream'
        }
      ]
    },
    {
      text: 'SIPs',
      collapsible: true,
      items: [
        {
          text: 'What is SIP?',
          link: '/guide/what-is-sip'
        },
        {
          text: 'SIP002 URI Scheme',
          link: '/guide/sip002'
        },
        {
          text: 'SIP003 Plugin',
          link: '/guide/sip003'
        },
        {
          text: 'SIP008 Online Configuration Delivery',
          link: '/guide/sip008'
        }
      ]
    },
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: 'Contributors', link: '/guide/contributors' }
      ]
    }
  ]
}