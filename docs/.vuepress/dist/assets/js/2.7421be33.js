(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,s,a){t.exports=a.p+"assets/img/email-select-code.618f4ace.png"},147:function(t,s,a){t.exports=a.p+"assets/img/email-select-sprout-email.48bc0225.png"},149:function(t,s,a){t.exports=a.p+"assets/img/email-select-settings.ebd5ca99.png"},265:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",[t._v("Email Dropdown Field")]),e("p",[t._v("The Email Select field allows a user to select a spam-protected Email Address from a dropdown list and trigger a notification to that email address using Sprout Forms or Sprout Email.")]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),e("p",[t._v("The Sprout Forms Email Select field will continue to be available in Craft 3 with the new name: Email Dropdown. The Craft Email Select field is deprecated and will be removed in Craft 3.")])]),e("h2",{attrs:{id:"email-select-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-select-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Email Select Field")]),e("p",[e("img",{attrs:{src:a(149),alt:"Sprout Email Select Field"}})]),e("p",[t._v("Setup your Email Select Field just like you would setup up a Dropdown field. The only difference is in how the Email Select field behaves.")]),e("p",[t._v("When you output your Email Select field on the front-end of your website using Sprout Forms, the Email Select field will mask the email addresses from your settings so they cannot be harvested for spam or seen by the public.")]),e("p",[e("img",{attrs:{src:a(146),alt:"Email Select doesn't display email addresses in your template code"}})]),e("p",[t._v("Additionally, after your Email Select field is submitted, the selected email will be unmasked and can be used to trigger dynamic email notifications using Sprout Forms or Sprout Email.")]),e("h3",{attrs:{id:"multiple-email-addresses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-email-addresses","aria-hidden":"true"}},[t._v("#")]),t._v(" Multiple email addresses")]),e("p",[t._v("If you would like to add multiple email addresses to an option, separate each email address with a comma:")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("email1@website.com, email2.website.com\n")])])]),e("h2",{attrs:{id:"using-the-email-select-field-with-sprout-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-email-select-field-with-sprout-email","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Email Select Field with Sprout Email")]),e("div",{pre:!0},[e("p",[t._v("Once you have setup your Email Select Field and assigned it to a Sprout Form, you can setup a notification to be sent to the selected email address when your form is submitted. Add your Email Select field handle "),e("code",[t._v("{emailSelectFieldHandle}")]),t._v(" to your Sprout Email Notification Recipients setting and select the Event "),e("em",[t._v("When a Sprout Forms Entry is saved")]),t._v(" along with the appropriate settings to target your specific form.")])]),e("p",[e("img",{attrs:{src:a(147),alt:"Send dynamic emails with Email Select and Sprout Email"}})]),e("h2",{attrs:{id:"using-the-email-select-field-with-sprout-forms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-email-select-field-with-sprout-forms","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Email Select Field with Sprout Forms")]),e("div",{pre:!0},[e("p",[t._v("Once you have setup your Email Select Field and assigned it to a form, you can setup a notification to be sent to the selected email address when your form is submitted.  Add your Email Select field handle "),e("code",[t._v("{emailSelectFieldHandle}")]),t._v(" to your Notifications Recipients setting.")])]),e("p",[t._v("If you need to manage your Email Select field in custom HTML, there is a helper method to obfuscate your email addresses:")]),e("div",{staticClass:"language-Twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailSelectField")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("contact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("getField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("emailSelect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token other"}},[t._v('<select name="fields[')]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailSelectField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),e("span",{pre:!0,attrs:{class:"token other"}},[t._v(']">')]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("contact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailSelect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("options")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutFields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("obfuscateEmailAddresses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailSelectField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("option")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("options")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token other"}},[t._v('<option value="')]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),e("span",{pre:!0,attrs:{class:"token other"}},[t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),e("span",{pre:!0,attrs:{class:"token other"}},[t._v("selected")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),e("span",{pre:!0,attrs:{class:"token other"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("label")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),e("span",{pre:!0,attrs:{class:"token other"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token ld"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token rd"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token other"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])])])}],n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);s.default=r.exports}}]);