import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Arlo Hosting Documentation',
  description: 'Everything you need to host, manage, and maintain your services with Arlo Hosting.',
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Documentation', link: '/server/' },
      { text: 'Support', link: '/support/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome to Arlo Hosting', link: '/getting-started/' },
          { text: 'Creating Your Account', link: '/getting-started/account' },
          { text: 'Arlo Credits', link: '/getting-started/credits' },
          { text: 'Your First Server', link: '/getting-started/first-server' }
        ]
      },

      {
        text: 'Managing Your Server',
        items: [
          { text: 'Overview', link: '/server/' },
          { text: 'Using the Panel', link: '/server/panel' },
          { text: 'Console & Logs', link: '/server/console' },
          { text: 'Managing Files', link: '/server/files' },
          { text: 'Databases', link: '/server/databases' },
          { text: 'Backups', link: '/server/backups' }
        ]
      },

      {
        text: 'Discord Bots',
        items: [
          { text: 'Overview', link: '/discord-bots/' },
          { text: 'Python Bots', link: '/discord-bots/python' },
          { text: 'Node.js Bots', link: '/discord-bots/nodejs' },
          { text: 'Installing Dependencies', link: '/discord-bots/dependencies' }
        ]
      },

      {
        text: 'Billing & Arlo Credits',
        items: [
          { text: 'Overview', link: '/billing/' },
          { text: 'Arlo Credits', link: '/billing/credits' },
          { text: 'Renewals', link: '/billing/renewals' },
          { text: 'Service Suspension', link: '/billing/suspension' }
        ]
      },

      {
        text: 'Troubleshooting',
        items: [
          { text: 'Overview', link: '/troubleshooting/' },
          { text: "Bot Won't Start", link: '/troubleshooting/bot-not-starting' },
          { text: 'Bot Keeps Crashing', link: '/troubleshooting/bot-crashing' }
        ]
      },

      {
        text: 'Support',
        items: [
          { text: 'Contacting Arlo Support', link: '/support/' },
          { text: 'Reporting an Issue', link: '/support/reporting' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'discord',
        link: 'https://discord.gg/TukHHaWDrW'
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Arlo Hosting Documentation',
      copyright: '© Arlo Group'
    }
  }
})