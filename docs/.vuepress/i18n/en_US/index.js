module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en-US',
    title: 'PS5 Guide',
    description: 'A PS5 modding guide, from stock to etaHEN.',
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};