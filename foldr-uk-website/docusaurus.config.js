/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Foldr',
  tagline: 'A programming blog by Jamie McCrindle',
  url: 'https://foldr.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jamiemccrindle', // Usually your GitHub org/user name.
  projectName: 'foldr.uk', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Foldr',
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars.githubusercontent.com/u/909696?s=60&v=4',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jamiemccrindle/foldr.uk',
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
            'https://github.com/jamiemccrindle/foldr.uk/foldr-uk-website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
