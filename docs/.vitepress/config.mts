import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DigiBeter",
  description: "Het boek en meer...",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'De auteurs', link: '/auteurs' },
      { text: 'Bestellen', link: '/bestellen'}
    ],

    sidebar: [
      {
        text: 'En meer',
        items: [
          { text: 'De auteurs', link: '/auteurs' },
          { text: 'Bestellen', link: '/bestellen' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/digibeter-online/website' }
    ]
  }
})
