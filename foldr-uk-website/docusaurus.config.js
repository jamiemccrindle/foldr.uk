/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Foldr',
  tagline: 'A programming blog by Jamie McCrindle',
  url: 'https://foldr.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Foldr',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jamiemccrindle/foldr.uk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jamiemccrindle/foldr.uk',
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
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/jamiemccrindle/foldr.uk/edit/main/foldr-uk-website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
