// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "alittlefaun",
  favicon: "images/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "alittlefaun plush",
        logo: {
          src: "images/logo.png",
        },
        items: [
          { to: "commissions", label: "Commissions", position: "left" },
          { to: "terms", label: "Terms and Conditions", position: "left" },
          { to: "about", label: "About", position: "left" },
          { to: "faq", label: "FAQ", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contact",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/alittlefaun",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/alittlefaun/",
              },
              {
                label: "Deviant Art",
                href: "https://www.deviantart.com/alittlefaun",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} alittlefaun plush, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;