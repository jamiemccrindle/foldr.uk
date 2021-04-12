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
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Foldr',
      logo: {
        alt: 'My Site Logo',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
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
