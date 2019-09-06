module.exports = {
  title: "Developer Docs",
  description: "Developer documentation for Bot Bind addon developers.",
  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  themeConfig: {
    logo: "./assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "http://botbind.com" }
    ],
    sidebar: "auto",
    sidebarDepth: 2,
    lastUpdated: true,
    repo: "botbind/docs",
    editLinks: true
  },
  serviceWorker: true
};
