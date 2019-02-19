(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{308:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Hidden Field")]),a("p",[t._v("The Hidden Field allows you to define the value of a field on your form ahead of time without displaying that field to the user. This can be useful to help prepare information that will need to be associated with a form but doesn't necessarily need to be seen or filled out by the user.")]),a("p",[t._v("The Hidden Field does display the value that you set in the templates so an enterprising user could view the code on your page and see the value you have prepared, and if they truly desire, even modify it directly in the code on the page. If you want to predefine a value that your user will never see and can never modify, see the "),a("router-link",{attrs:{to:"./invisible-field.html"}},[t._v("Invisible Field")]),t._v(".")],1),t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v("Enable this setting if you wish to allow users in the Control Panel to edit this Hidden Field value. By default, the field will display the value but not allow any edits.")]),t._m(4),a("p",[t._v("When using the default Form Templates, the Hidden Field has access to several common variables that are also available as Craft Global Variables. The default variables include:")]),t._m(5),a("div",{pre:!0},[a("p",[t._v("These default values can be customized when using "),a("router-link",{pre:!0,attrs:{to:"./template-overrides.html"}},[t._v("Template Overrides")]),t._v(" and additional variables can be made available using the "),a("code",[t._v("addFieldVariables")]),t._v(" tag. To add additional variables, pass those variables to the "),a("code",[t._v("addFieldVariables")]),t._v(" tag in your templates before the "),a("code",[t._v("displayForm")]),t._v(" tag.")],1)]),t._m(6),t._m(7),t._m(8),a("p",[t._v("And shorthand syntax:")]),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"hidden-field-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hidden-field-value","aria-hidden":"true"}},[this._v("#")]),this._v(" Hidden Field Value")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("This setting let's you predefine the value you want to see in your Hidden Field. It can parse Twig and any values provided via the "),s("code",[this._v("addFieldVariables")]),this._v(" template tag. See the Field Variables section below for more info.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"allow-edits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-edits","aria-hidden":"true"}},[this._v("#")]),this._v(" Allow edits")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"field-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Field Variables")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("craft")]),s("li",[this._v("currentSite")]),s("li",[this._v("currentUser")]),s("li",[this._v("now")]),s("li",[this._v("siteName")]),s("li",[this._v("siteUrl")]),s("li",[this._v("systemName")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("addFieldVariables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("category")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hiddenEmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("email@website.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("The Hidden Field Value setting is processed like a Twig Template and you can target the available variables are all made available to the field using the "),s("code",[this._v("object")]),this._v(" variable. The variables can be accessed using standard Twig syntax or shorthand object syntax:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getAbsoluteUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("customField")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("customField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("hiddenEmail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token other"}},[this._v("{craft.app.getRequest().getAbsoluteUrl()}\n{entry.title}\n{entry.customField}\n{entry.customField.first().id}\n{hiddenEmail}")]),this._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);