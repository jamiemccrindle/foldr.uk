/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Jamie McCrindle',
  tagline: 'A programming blog',
  url: 'https://foldr.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.jpeg',
  organizationName: 'jamiemccrindle', // Usually your GitHub org/user name.
  projectName: 'foldr.uk', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-GZL9B6CNB7',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Jamie McCrindle',
      logo: {
        alt: 'Jamie McCrindle Logo',
        src: 'img/logo.jpeg',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jamiemccrindle',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/foldr',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/foldr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jamiemccrindle',
            },
            {
              label: 'jamie.mccrindle.org',
              href: 'https://jamie.mccrindle.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jamie McCrindle. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['powershell', 'csharp', 'hcl'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Jamie McCrindle',
          blogDescription: 'A programming blog',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 5,
          postsPerPage: 1, // if not specified then http://localhost:3000/ will be an empty screen
          path: "./blog",
          routeBasePath: "/", // Set this value to '/'.
          showReadingTime: true,
          editUrl:
            'https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
