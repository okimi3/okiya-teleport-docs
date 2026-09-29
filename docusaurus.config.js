// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const repositoryName = 'okiya-teleport-docs';
const organizationName = 'okimi3';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OKIYA式 テレポートギミック Ver.2',
  tagline: 'Unityで迷わず組み込める、テレポートギミックの公式ガイド',
  favicon: 'img/favicon.svg',
  url: 'https://okimi3.github.io',
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? '/okiya-teleport-docs/'
      : '/',
  organizationName,
  projectName: repositoryName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'ja', locales: ['ja']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: undefined,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OKIYA式 Teleport V2',
      logo: {alt: 'OKIYA式 Teleport V2', src: 'img/logo.svg'},
      items: [
        {to: '/docs/quick-start', label: 'クイックスタート', position: 'left'},
        {
          href: `https://github.com/${organizationName}/${repositoryName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ガイド',
          items: [
            {label: 'クイックスタート', to: '/docs/quick-start'},
            {label: 'FAQ', to: '/docs/faq'},
          ],
        },
        {
          title: '関連リンク',
          items: [
            {label: 'GitHub', href: `https://github.com/${organizationName}/${repositoryName}`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OKIYA. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
  },
};

export default config;
