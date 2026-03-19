// @ts-check
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "PROGRES Docs",
	tagline: "Documentation communautaire pour la plateforme PROGRES",
	favicon: "img/favicon.ico",

	url: "https://progres-docs.github.io",
	baseUrl: "/",

	organizationName: "progres-docs",
	projectName: "progres-docs.github.io",
	trailingSlash: false,

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "fr",
		locales: ["fr", "ar"],
		localeConfigs: {
			fr: {
				label: "Français",
				direction: "ltr",
				htmlLang: "fr",
			},
			ar: {
				label: "العربية",
				direction: "rtl",
				htmlLang: "ar",
			},
		},
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					editUrl:
						"https://github.com/progres-docs/progres-docs.github.io/edit/main/",
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "PROGRES Docs",
				logo: {
					alt: "PROGRES Docs Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Documentation",
					},
					{
						type: "localeDropdown",
						position: "right",
					},
					{
						href: "https://github.com/progres-docs/progres-docs.github.io",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Documentation",
						items: [
							{
								label: "Introduction",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Contribuer",
						items: [
							{
								label: "Guide de contribution",
								href: "https://github.com/progres-docs/progres-docs.github.io/blob/main/CONTRIBUTING.md",
							},
							{
								label: "Signaler une erreur",
								href: "https://github.com/progres-docs/progres-docs.github.io/issues/new",
							},
						],
					},
					{
						title: "Communauté",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/progres-docs",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} PROGRES Docs — Documentation libre sous licence MIT`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			colorMode: {
				defaultMode: "light",
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
		}),
};

module.exports = config;
