/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  title: 'PlugZapi Docs',
  tagline: 'Documentação completa da API',
  url: 'https://developer.plugzapi.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.plugzapi.com.br/wp-content/themes/plugzapi/favicon.png',
  organizationName: 'PlugZapi',
  projectName: 'plugzapi-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'PlugZapi Logo',
        src:
          'https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/img/Aplica%C3%A7a%C3%A7ao_Branca.png',
     
      },
      // icon: {
      //   alt: 'PlugZapi Logo',
      //   src:

      //   'https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/img/Icon.png'
      // },
      items: [],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Learn',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Legal',
    //       // Please do not remove the privacy and terms, it's a legal requirement.
    //       items: [
    //         {
    //           label: 'Privacy',
    //           href: 'https://opensource.facebook.com/legal/privacy/',
    //         },
    //         {
    //           label: 'Terms',
    //           href: 'https://opensource.facebook.com/legal/terms/',
    //         },
    //         {
    //           label: 'Data Policy',
    //           href: 'https://opensource.facebook.com/legal/data-policy/',
    //         },
    //         {
    //           label: 'Cookie Policy',
    //           href: 'https://opensource.facebook.com/legal/cookie-policy/',
    //         },
    //       ],
    //     },
    //   ],
    //   logo: {
    //     alt: 'PlugZapi Docs',
    //     src:
    //       'https://www.plugzapi.com.br/wp-content/themes/plugzapi/dist/images/logo.svg',
    //     href: 'https://opensource.facebook.com',
    //   },
    //   // Please do not remove the credits, help to publicize Docusaurus :)
    //   copyright: `Copyright © ${new Date().getFullYear()} PlugZapi.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Plug-Zapi/plug-zapi-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
