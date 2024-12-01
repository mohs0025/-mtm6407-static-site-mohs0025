import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sara Mohsenpour Portfolio",
  description: "A showcase of creativity, design, and development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Web Development', link: '/portfolio/web-development' },
      { text: 'Web Design', link: '/portfolio/web-design' },
      { text: 'UI/UX-Projects', link: '/portfolio/ui-ux-projects' }
    ],

    sidebar: [
      {
        text: 'My Portfolio',
        items: [
          { text: 'Web Development', link: '/portfolio/web-development' },
          { text: 'Web Design', link: '/portfolio/web-design' },
          { text: 'UI/UX-Projects', link: '/portfolio/ui-ux-projects' }    
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sara-mohsenpour-0b534b2a/' }
    ]
  }
})
