// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python Learning Hub',
  tagline: 'Master Python from scratch with sample codes.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'python-learning-hub', 
  projectName: 'full-python-course',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexBlog: false,
        docsRouteBasePath: "/docs",
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['always'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.svg' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#6366f1' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'python, programming, coding, tutorial, course, advanced python'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      navbar: {
        title: 'Python Hub Pro',
        logo: {
          alt: 'Python Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Curriculum',
          },
          {
            href: 'https://github.com/your-org/python-hub',
            label: 'Source Code',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Basics', to: '/docs/python-learning/01-basics/01-get-started' },
              { label: 'OOP Mastery', to: '/docs/python-learning/04-oop/35-oop' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Built-in Functions', to: '/docs/python-learning/06-built-ins/45-built-in-functions' },
              { label: 'Python.org', href: 'https://www.python.org/' },
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/python' },
            ],
          },
          {
            title: 'Platform',
            items: [
              { label: 'Privacy Policy', to: '/docs/intro' },
              { label: 'Terms of Use', to: '/docs/intro' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Python Learning Hub Pro. Built with Production Excellence.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
