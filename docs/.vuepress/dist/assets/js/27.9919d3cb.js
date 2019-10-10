(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{251:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Coding Guidelines")]),t._v(" "),a("p",[t._v("A central principle of the Sprout Plugin Suite is to create an experience – for both users and developers – that looks and feels like the native experience with Craft CMS. Toward that end, wherever possible, Sprout adopts conventions set forth by Craft CMS. General conventions include:")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Convention")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/craftcms/cms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft CMS codebase"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Use Craft's APIs in the same way that Craft uses them")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://docs.craftcms.com/v3/extend/coding-guidelines.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Guidelines"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Follow conventions outlined in Craft's Coding Guidelines")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Code Style"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Craft Code Style settings for PhpStorm")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Inspections"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Craft Inspections for PhpStorm")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Php Inspections (EA Extended)"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("More code conventions for PhpStorm")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yii Inspections"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yii 2 and Craft-specific inspections in PhpStorm")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/craftcms/sass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass Mixins for Craft CMS"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Use Craft's Control Panel style conventions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.npmjs.com/package/@pixelandtonic/craftui",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft UI"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Vue.js components and styles for Craft CMS apps")])])])])]),t._v(" "),a("p",[t._v("Where there are no clear Craft conventions for our codebase or workflows we endeavor to establish our own conventions that align with the Craft User Experience and are consistent with cultural conventions in the Craft community. An incomplete list of these conventions are outlined below.")]),t._v(" "),a("h2",{attrs:{id:"git-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-workflow"}},[t._v("#")]),t._v(" Git Workflow")]),t._v(" "),a("p",[t._v("We use a git workflow in the spirit of the "),a("a",{attrs:{href:"http://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git branching model"),a("OutboundLink")],1),t._v(" with a few updates to better fit our workflow.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("As we have to maintain multiple master copies of our plugins, instead of a "),a("code",[t._v("master")]),t._v(" branch, we maintain multiple master version branches. These branches are named using the format "),a("code",[t._v("v#")]),t._v(" where "),a("code",[t._v("v2")]),t._v(" would represent all releases for the "),a("code",[t._v("v2.x")]),t._v(" branch of the software. These version numbers correlate with the plugin version numbers, not the Craft version number, as we may have multiple major releases of a plugin for a single release of Craft.")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Example plugin branches\n- develop\n- feature/feature-name\n- bugfix/bugfix-name\n- v1\n- v2\n- v3\n")])])]),a("h2",{attrs:{id:"local-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[t._v("#")]),t._v(" Local Development")]),t._v(" "),a("p",[t._v("Create a symlink to the plugin or module within the Craft project that will be used for development:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ln -s /path/to/cloned/repo /path/to/symlink/in/project/vendor/barrelstrength/folder\n")])])]),a("div",{pre:!0},[a("p",[t._v("In the case you will be editing front-end assets, you'll need to configure "),a("code",[t._v("npm")]),t._v(" and process the "),a("code",[t._v("scss")]),t._v(" and "),a("code",[t._v("js")]),t._v(" files you edit in a give asset bundle's "),a("code",[t._v("src/web/[assetbundle]/src")]),t._v(" folder into the "),a("code",[t._v("src/web/[assetbundle]/dist")]),t._v(" folder:")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install\nnpm run watch\n")])])]),a("h2",{attrs:{id:"naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming"}},[t._v("#")]),t._v(" Naming")]),t._v(" "),a("p",[t._v("The name of a plugin will be used in several different contexts. We use the following conventions:")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Context")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Naming Convention")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GitHub repo")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/craft-sprout-forms")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Composer/Packagist")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-forms")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Plugin folder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-forms")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Namespace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sproutforms")])])])])]),t._v(" "),a("h2",{attrs:{id:"folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),a("p",[t._v("When possible, we follow conventions in Craft's folder architecture in our plugins.")]),t._v(" "),a("h3",{attrs:{id:"root-directory-and-key-src-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root-directory-and-key-src-files"}},[t._v("#")]),t._v(" Root directory and key src files")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── .github\n├── .gitignore\n├── CHANGELOG.md\n├── composer.json\n├── lib\n├── LICENSE.md\n├── README.md\n└── src\n    ├── Plugin.php\n    └── translations\n        └── en\n└── webpack.mix.js\n")])])]),a("div",{pre:!0},[a("p",[t._v("References within "),a("code",[t._v("README.md")]),t._v(" and any other general information files should be kept to a minimum and point users toward our docs, where we maintain more comprehensive documentation. As we maintain several plugins, it gets tedious to update references in numerous general information files and our documentation serves as a centralized place for this type of information about our plugins.")])]),a("div",{pre:!0},[a("p",[t._v("Similarly, we aim to keep the "),a("code",[t._v("composer.json")]),t._v(" file as simple as possible. Don't add "),a("code",[t._v("schemaVersion")]),t._v(", "),a("code",[t._v("hasCpSection")]),t._v(", or "),a("code",[t._v("hasCpSettings")]),t._v(" to this file. They should go in the primary plugin module class to more easily toggle the settings without running into issues with cached values in Craft's "),a("code",[t._v("plugins.php")]),t._v(" file.")])]),a("div",{pre:!0},[a("p",[t._v("We rename the primary module class "),a("code",[t._v("Plugin.php")]),t._v(" to use the name of the plugin (i.e. "),a("code",[t._v("SproutForms.php")]),t._v("). This update requires that we set the "),a("code",[t._v("composer.json")]),t._v(" "),a("em",[t._v("extra->class")]),t._v(" setting to define the Plugin.php as a file with the name of the plugin itself.")])]),a("div",{pre:!0},[a("p",[t._v("Front-end packages are managed in "),a("code",[t._v("package.json")]),t._v(". Third-party libraries that must be included in the plugin are are added to the "),a("code",[t._v("lib")]),t._v(" folder. CSS (SCSS) and Javascript (ES6) assets are managed with Webpack via Laravel Mix. Each Asset Source is configured in "),a("code",[t._v("webpack.mix.js")]),t._v(" to process files from the "),a("code",[t._v("src/web/[assetbundle]/src")]),t._v(" folder and compile them to the "),a("code",[t._v("src/web/[assetbundle]/dist")]),t._v(" folder.")])]),a("h3",{attrs:{id:"resources-and-templating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources-and-templating"}},[t._v("#")]),t._v(" Resources and templating")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── src\n    └── web\n        └── assets\n            └── [assetbundle]\n                ├── dist\n                ├── src\n                └── [CustomAssetBundle].php    \n        └── twig\n            └── variables\n                └── [CustomVariable.php]\n")])])]),a("div",{pre:!0},[a("p",[t._v("All asset bundles are managed in the "),a("code",[t._v("src/web/assets")]),t._v(" folder and all things Twig (variables, filters, nodes, etc.) are managed in the "),a("code",[t._v("src/web/twig")]),t._v(" folder.")])]),a("h3",{attrs:{id:"components-and-integrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components-and-integrations"}},[t._v("#")]),t._v(" Components and Integrations")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── src\n    └── base\n        └── [BaseCustomComponentType].php\n    └── [customcomponenttype]\n        ├── [CustomComponentType1].php\n        └── [CustomComponentType2].php\n    └── fields\n        ├── [CustomField1].php\n        └── [CustomField2].php\n    └── integrations\n        └── [pluginname]\n            └── [integrationcustomcomponenttype]\n                ├── [IntegrationCustomComponentType1].php\n                └── [IntegrationCustomComponentType2].php\n    └── templates \n        └── _components\n            └── [customcomponenttype]\n                ├── [customcomponenttype1]\n                └── [customcomponenttype2]\n            └── fields\n                ├── [customfield1]\n                └── [customfield2]\n        └── _integrations\n            └── [pluginname]\n                └── [integrationcustomcomponenttype]\n                    ├── [integrationcustomcomponenttype1]\n                    └── [integrationcustomcomponenttype2]\n")])])]),a("p",[t._v("We manage various types of components within our plugins. The structure above illustrates how we organize three classes of components. We use the example of a Custom Field as how we would organize extending Craft component within our plugins.")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"table"}},[a("table",[a("thead",[a("tr",[a("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Component Type")]),t._v(" "),a("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Name")]),t._v(" "),a("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Craft Components")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("fields")])]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Craft component classes get placed in a folder named after the component type in the "),a("code",[t._v("src")]),t._v(" folder")])]),t._v(" "),a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Custom Components")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("[customcomponenttype]")])]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Custom Component classes get placed in a folder named after the component type in the "),a("code",[t._v("src")]),t._v(" folder")])]),t._v(" "),a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Integration Components")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("[integrationcustomcomponenttype]")])]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Integration Component classes get placed in a folder named after the component type in the "),a("code",[t._v("integrations/pluginname")]),t._v(" folder")])])])])])]),a("h3",{attrs:{id:"github-community-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-community-templates"}},[t._v("#")]),t._v(" Github community templates")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── .github\n    ├── CODE_OF_CONDUCT.md\n    ├── CONTRIBUTING.md\n    └── ISSUE_TEMPLATE\n        bug-report.md\n        feature-request.md\n    ├── SECURITY.md\n    └── SUPPORT.md\n")])])]),a("p",[t._v("Community templates should link to our pages in our documentation with more comprehensive information wherever possible.")]),t._v(" "),a("h2",{attrs:{id:"common-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-modules"}},[t._v("#")]),t._v(" Common Modules")]),t._v(" "),a("p",[t._v("Many Sprout plugins share functionality and this code is managed in shared Yii Modules.")]),t._v(" "),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Module")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common settings and UI components")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-email")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common email functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-reports")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common reporting functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-import")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common import functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-fields")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common field functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-lists")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common list functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-redirects")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common sitemap functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-sitemaps")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common redirects functionality")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-uris")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Common URL-enabled Section functionality")])])])])]),t._v(" "),a("h2",{attrs:{id:"translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translations"}},[t._v("#")]),t._v(" Translations")]),t._v(" "),a("p",[t._v("Use the default Craft conventions for translations. This allows us to benefit from the Yii Inspections that allow us to bulk add and remove translations.")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"table"}},[a("table",[a("thead",[a("tr",[a("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Context")]),t._v(" "),a("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Translation Convention")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("PHP")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("Craft::t('sprout-forms', 'Message');")])])]),t._v(" "),a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Twig")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("{{ \"Message\"|t('sprout-forms') }}")])])]),t._v(" "),a("tr",[a("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("CP Javascript")]),t._v(" "),a("td",{pre:!0,attrs:{style:"text-align:left"}},[a("code",[t._v("Craft:t('sprout-forms');")])])])])])])]),a("p",[t._v("Each plugin or module maintains it's own translation file. As some plugins depend on multiple modules for their functionality, this may mean that someone translating a plugin will also have to translate translation files in other modules. For example, to completely translate Sprout Forms one would need to translate the files in Sprout Forms, Sprout Base Fields, and Sprout Base.")]),t._v(" "),a("h3",{attrs:{id:"exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[t._v("#")]),t._v(" Exceptions")]),t._v(" "),a("p",[t._v("Exceptions are for developers, not for users. Exception messages should not be translated:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BAD:\nthrow new Exception(Craft::t('sprout-forms, 'Something happened'));\n\nGOOD:\nthrow new Exception('Something happened');\n")])])]),a("h2",{attrs:{id:"migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),a("p",[t._v("Due to our application structure using shared modules, in some cases migrations may need to be run by multiple plugins and we cannot know which order they will get run in. To address this, we use the following conventions:")]),t._v(" "),a("ul",[a("li",[t._v("Make sure every migration can be run twice, without throwing errors if it has already been run once.")]),t._v(" "),a("li",[t._v("All migrations that affect a plugin with a shared module should be placed in the base module and instances of those migrations should be created in each respective plugin where they are needed.")])]),t._v(" "),a("h3",{attrs:{id:"naming-migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-migrations"}},[t._v("#")]),t._v(" Naming migrations")]),t._v(" "),a("h4",[t._v("Order")]),t._v(" "),a("p",[t._v("Migration naming will use the date in the first segment and the second segment will just represent the order that they should be run in for a particular release. The following migrations are all be part of a release on the same day, and are ordered 1, 2, 3 in the order they should run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("m190101_000001_migration_description.php\nm190101_000002_migration_description.php\nm190101_000003_migration_description.php\n")])])]),a("h4",[t._v("Migrations used by multiple plugins")]),t._v(" "),a("p",[t._v("Any migration instance that is just running a migration in base module should use the same name as the base migration and append the plugin name that it is being run from.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("m190101_000001_migration_description.php              // Sprout Base Email\nm190101_000001_migration_description_sproutemail.php  // Sprout Email\nm190101_000001_migration_description_sproutforms      // Sprout Forms\n")])])]),a("h3",{attrs:{id:"testing-prior-to-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-prior-to-release"}},[t._v("#")]),t._v(" Testing Prior to Release")]),t._v(" "),a("p",[t._v("To test one or more plugins and modules under development on real websites before releases, changes can be pushed to a development branch and pulled into any appropriate project for testing.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("In this example, we grab the latest on the "),a("code",[t._v("develop")]),t._v(" branch for the Sprout SEO plugin and the Sprout Base Redirects module. To ensure composer things it's working with the release numbers we're using in our "),a("code",[t._v("composer.json")]),t._v(" we can tell composer what version number to use for the code we are testing:")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('composer require barrelstrength/sprout-seo:"dev-develop as 4.2.0" barrelstrength/sprout-base-redirects:"dev-develop as 1.1.1"\n')])])]),a("div",{pre:!0},[a("p",[t._v("Requiring "),a("code",[t._v("dev-develop")]),t._v(" should pull in the latest commit on the "),a("code",[t._v("develop")]),t._v(" branch. For more specific tests, you can also target a specific commit hash:")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('composer require barrelstrength/sprout-seo:"dev-develop as 4.2.0" barrelstrength/sprout-base-redirects:"dev-develop#dfae1a922cdb5dd32fd8a813839fddc26ff412b0 as 1.1.1"\n')])])]),a("p",[t._v("For additional troubleshooting, consider some of the following steps:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rm composer.lock      # Remove the composer.lock file\ncomposer clear-cache  # Clear composers cache\ncomposer remove ...   # Try removing the package you are testing before installing it\nrm -r ./vendor        # Remove the entire ./vendor directory and rebuild it with `composer update`\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);