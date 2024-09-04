import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Fast Hawk',
  tagline: 'Безкоштовний публічний Rust сервер',
  favicon: 'img/favicon.png',

  url: 'https://fhawk.fun',
  baseUrl: '/',

  organizationName: 'White-Heart-Dev',
  projectName: 'fast-hawk-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-background.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Fast Hawk',
        logo: {
          alt: 'Fast Hawk Logo',
          src: 'img/logo-small.png',
          href: '/',
        },
        items: [
          {
						href: 'https://github.com/liubquanti-dev/Fast-Hawk-Site',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Інформація',
            items: [

            ],
          },
          {
            title: 'Спільнота',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/TYs8FjvzFf',
              },
              {
                label: 'Steam',
                to: 'https://steamcommunity.com/groups/dglade',
              },
            ],
          },
          {
            title: 'Більше',
            items: [

              {
                label: 'GitHub',
                to: 'https://github.com/liubquanti-dev/Fast-Hawk-Site',
              },
            ],
          },
          {
            title: 'Інші сервери',
            items: [

              {
                label: 'Minecraft',
                to: 'https://mcount.fun',
              },
              {
                label: 'Terraria',
                to: 'https://jbrave.fun',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LIUBQUANTUM GROUP.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
