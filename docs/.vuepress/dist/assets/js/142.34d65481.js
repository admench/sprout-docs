(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{188:function(t,e,s){t.exports=s.p+"assets/img/xml-sitemap.d7e314b4.png"},189:function(t,e,s){t.exports=s.p+"assets/img/xml-sitemap-settings.ece16464.png"},204:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Entries")]),e("li",[this._v("Categories")]),e("li",[this._v("Craft Commerce Products")]),e("li",[this._v("Custom Page URLs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(188),alt:"Sitemap Management"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"section-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#section-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Section Settings")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Setting")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Enable it or disable it in your sitemap")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Priority")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Update the Priority of the items in the Section relative to the other items in your Sitemap")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Change Frequency")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Update the Change Frequency of the items in the Section relative to other items in your Sitemap")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sitemap-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap Settings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Your Sitemap output is managed by two settings on the "),e("code",[this._v("Sprout Seo->Settings->General")]),this._v(" tab.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(189),alt:"XML Sitemap Settings"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{pre:!0},[s("div",{attrs:{class:"table"}},[s("table",[s("thead",[s("tr",[s("th",{attrs:{style:"text-align:left"}},[t._v("Setting")]),s("th",{attrs:{style:"text-align:left"}},[t._v("Description")])])]),s("tbody",[s("tr",[s("td",{attrs:{style:"text-align:left"}},[t._v("Enable Dynamic Sitemaps")]),s("td",{attrs:{style:"text-align:left"}},[t._v("Enabling this setting will display a sitemap for all your URL-Enabled sections when you visit the URL: "),s("code",[t._v("/sitemap.xml")]),t._v(" on your website.")])]),s("tr",[s("td",{attrs:{style:"text-align:left"}},[t._v("Total Elements Per Sitemap")]),s("td",{attrs:{style:"text-align:left"}},[t._v("The number of items that display on each page of your sitemap. A lower number may be necessary for sitemaps with a large number of elements or limited server resources.")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sitemap-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-xml","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap XML")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Your sitemap will consist of two or more XML Sitemap files. This will include a Sitemap Index file that lists all relevant sitemaps for your website and individual XML Sitemap files for each respective section. Individual Sitemap files will be broken into multiple files when the number of entries is more than the "),e("em",[this._v("Total Elements Per Sitemap")]),this._v(" setting value.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sitemap-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-index","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap Index")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Your Sitemap Index will be output when you visit the URL: "),e("code",[this._v("/sitemap.xml")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n <sitemap>\n    <loc>{{ siteUrl }}singles-sitemap.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap1.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap2.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}channelnamehandle-entries-sitemap3.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}categorygrouphandle-categories-sitemap1.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}productypehandle-products-sitemap1.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n <sitemap>\n    <loc>{{ siteUrl }}custom-sections-sitemap.xml</loc>\n    <lastmod>{{ now|date('Y-m-d') }}</lastmod>\n </sitemap>\n</sitemapindex>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"section-specific-sitemaps-single-language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#section-specific-sitemaps-single-language","aria-hidden":"true"}},[this._v("#")]),this._v(" Section-specific Sitemaps (Single Language)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n    <url>\n        <loc>http://website.com/example-url</loc>\n        <lastmod>2017-08-08T03:08:03Z</lastmod>\n        <changefreq>weekly</changefreq>\n        <priority>0.5</priority>   \n    </url>\n\t\t<url>\n        <loc>http://website.com/example-url2</loc>\n        <lastmod>2017-08-08T03:08:03Z</lastmod>\n        <changefreq>weekly</changefreq>\n        <priority>0.5</priority>   \n    </url>\n</urlset>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"section-specific-sitemaps-multi-language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#section-specific-sitemaps-multi-language","aria-hidden":"true"}},[this._v("#")]),this._v(" Section-specific Sitemaps (Multi-language)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n    <url>\n        <loc>http://website.com/example-url</loc>\n        <lastmod>2017-08-08T03:08:03Z</lastmod>\n        <changefreq>weekly</changefreq>\n        <priority>0.5</priority>\n        <xhtml:link rel="alternate" hreflang="en_us" href="http://website.com/example-url" />\n        <xhtml:link rel="alternate" hreflang="de" href="http://website.com/de/example-url" />\n        <xhtml:link rel="alternate" hreflang="es" href="http://website.com/es/example-url" />     \n    </url>\n\t\t<url>\n        <loc>http://website.com/example-url2</loc>\n        <lastmod>2017-08-08T03:08:03Z</lastmod>\n        <changefreq>weekly</changefreq>\n        <priority>0.5</priority>\n        <xhtml:link rel="alternate" hreflang="en_us" href="http://website.com/example-url2" />\n        <xhtml:link rel="alternate" hreflang="de" href="http://website.com/de/example-url2" />\n        <xhtml:link rel="alternate" hreflang="es" href="http://website.com/es/example-url2" />     \n    </url>\n</urlset>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"custom-urls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-urls","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom URLs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Enable Custom URL management features in the Advanced Settings ("),e("code",[this._v("Sprout SEO->Settings->Advanced->Enable Custom Sections")]),this._v(")")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"craft-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("This method of generating your sitemap has been deprecated and has been removed in Craft 3.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("{{ craft.sproutSeo.sitemap() }}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("The "),e("code",[this._v("sitemap()")]),this._v(" tag generates XML data so you'll want to be sure your Craft template file uses the "),e("code",[this._v(".xml")]),this._v(" filetype: "),e("code",[this._v("sitemap.xml")])])])}],i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",[t._v("Sitemaps")]),s("p",[t._v("Generate sitemaps for all of your URL-enabled content for one or more languages. Sitemaps are managed directly within Craft (no template updates required).")]),s("p",[t._v("Sitemaps currently support the following types of content:")]),t._m(0),t._m(1),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("Plugins can add Sitemap support for custom "),s("router-link",{attrs:{to:"./custom-url-enabled-sections.html"}},[t._v("URL-Enabled Sections")]),t._v(". For example, Sprout Email adds Sitemap support for "),s("router-link",{attrs:{to:"./../email/campaign-emails.html"}},[t._v("Campaign Emails")]),t._v(".")],1)]),t._m(2),s("p",[t._v("All of your URL-enabled content types will appear on the Sitemap Settings page with the following settings:")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[t._v("Each individual sitemap will list the URLs for the content in your URL-Enabled Sections.")]),t._m(14),t._m(15),s("p",[t._v("If you have a multi-language site, your sitemap will adjust to reference URLs for all related content across languages.")]),t._m(16),t._m(17),s("p",[t._v("If you have more advanced Sitemap needs, Sprout SEO's Sitemap tool allows you to add any number of Custom URLs that will also be output in your Sitemap.")]),t._m(18),t._m(19),t._m(20),s("p",[t._v("To output the complete XML for your Sitemap, add the following tag to your sitemap template:")]),t._m(21),t._m(22)])},a,!1,null,null,null);e.default=n.exports}}]);