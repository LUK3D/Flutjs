export default {
    title: 'Flutjs',
    description: 'Javascript frot-end framework that folows the Flutter Pattern and Syntax.',
    themeConfig: {
        logo: '../Logo.svg',
        siteTitle: false,
        nav: [
            { text: 'Get Started', link: '/getting-started' },
            {
              text: 'Dropdown Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
          ],
          sidebar: [
            { 
                text: 'Get Started', 
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Examples', link: '/getting-started' },
                ]
            },
            {
                text: 'Instalation',
                items: [
                { text: 'With Npm', link: '/introduction' },
                { text: 'Vanilla', link: '/getting-started' },
                ]
            }
          ]
        
      }
  }