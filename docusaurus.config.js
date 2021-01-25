module.exports = {
  title: 'Yellow Messenger',
  tagline: 'Conversational AI Platform',
  url: 'https://docs.yellowmessenger.com',
  //url: 'https://localhost',
  //baseUrl: '/ym-documentation/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'yellowmessenger', // Usually your GitHub org/user name.
  projectName: 'platform-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://yellowmessenger.com/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/yellowmessenger/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yellowmessenger?lang=en',
            },
            {
              label: 'Developer Community',
              href: 'https://community.yellowmessenger.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.yellowmessenger.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yellowmessenger',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yellow Messenger Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
