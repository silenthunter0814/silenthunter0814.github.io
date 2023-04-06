import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

export default {
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  
  lang: 'en-US',
  title: 'Silent Hunter',
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
    logo: '/sh.png',
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
        { text: 'Deploying', link: 'pdfs/czh01.pdf' }
      ]
    },
    {
      text: 'Configuration',
      collapsible: true,
      items: [
        { text: 'C语言快速入门', link: '/guide/czh01' },
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
