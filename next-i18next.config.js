const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "ar"],
		defaultLocale: "en",
	},
	domains: [
		{
		  domain: 'http://localhost:3005',
		  defaultLocale: 'en',
		}
	  ],
  
	localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
