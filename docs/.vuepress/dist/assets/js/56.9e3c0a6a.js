(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{230:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Resolving Relationships")]),t._m(0),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": {\n\t\t\t\t"categoryRelationsHandle": [4, 5, 6]\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "EntryModel",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": {\n\t\t\t\t"categoryRelationsHandle": [4, 5, 6]\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])])],2),t._m(1),t._m(2),t._m(3),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"categoryRelationsHandle": {\n\t\t\t\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Category",\n\t\t\t\t\t"matchBy": "slug",\n\t\t\t\t\t"matchValue": ["category-slug-one","category-slug-two"],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"groupId": 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "EntryModel",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"categoryRelationsHandle": {\n\t\t\t\t\t"@model": "@model": "CategoryModel",\n\t\t\t\t\t"matchBy": "slug",\n\t\t\t\t\t"matchValue": ["category-slug-one","category-slug-two"],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"groupId": 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])])],2),t._m(4),t._m(5),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"thumbnailImage": {\n          "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Asset",\n\t\t\t\t\t"matchBy": "filename",\n\t\t\t\t\t"matchValue": ["ImageName03.jpg"],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"source": "images",\n\t\t\t\t\t\t"folderId": 8\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "EntryModel"\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"thumbnailImage": {\n          "@model": "AssetModel",\n\t\t\t\t\t"matchBy": "filename",\n\t\t\t\t\t"matchValue": ["ImageName03.jpg"],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"source": "images",\n\t\t\t\t\t\t"folderId": 8\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])])],2),t._m(6),a("div",{staticClass:"split"},[a("div",{staticClass:"left"},[a("p",[t._v("In this example we'll match User Relations to a custom field with an old ID for the User you wish to relate to.")]),a("p",[t._v("Let's say you are migrating content from an another database. You migrate over the users but when you import them into Craft, the IDs for that user are different. To help with the migration process it's sometimes helpful to create a custom field called \"Old ID\" and import the ID that identified the item you are importing in the old system.")]),a("p",[t._v("Once that is in place, you can prepare your import to match content related to that particular User based on the Old ID value that the user was related with in the old system.")]),t._m(7),a("code-toggle",{attrs:{languages:["craft3","craft2"]}},[a("template",{slot:"craft3"},[a("div",{staticClass:"language-craft3 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"relatedAuthors": {\n\t\t\t\t\t"@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\User",\n\t\t\t\t\t"matchBy": "oldId",\n\t\t\t\t\t"matchValue": [\n\t\t\t\t\t\t89,\n\t\t\t\t\t\t139,\n\t\t\t\t\t\t95\n\t\t\t\t\t],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"groupId": 3\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])]),a("template",{slot:"craft2"},[a("div",{staticClass:"language-craft2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n\t{\n\t\t"@model": "EntryModel",\n\t\t"attributes": { ... },\n\t\t"content": {\n\t\t\t"title": "In quaerat maiores sit est rerum iusto.",\n\t\t\t"fields": { ... },\n\t\t\t"related": {\n\t\t\t\t"relatedAuthors": {\n\t\t\t\t\t"@model": "UserModel",\n\t\t\t\t\t"matchBy": "oldId",\n\t\t\t\t\t"matchValue": [\n\t\t\t\t\t\t89,\n\t\t\t\t\t\t139,\n\t\t\t\t\t\t95\n\t\t\t\t\t],\n\t\t\t\t\t"matchCriteria": {\n\t\t\t\t\t\t"groupId": 3\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n]\n')])])])])],2)],1),a("div",{staticClass:"right"})]),t._m(8),a("div",{staticClass:"split"},[a("div",{staticClass:"left"},[a("div",{pre:!0},[a("p",[t._v("The "),a("code",[t._v("related")]),t._v(" key is also supported within the Matrix Block "),a("code",[t._v("fields")]),t._v(" array. See the docs on "),a("router-link",{attrs:{to:"./matrix-field.html"}},[t._v("Importing a Matrix Field")]),t._v(" for more info.")],1)])]),a("div",{staticClass:"right"})]),t._m(9),a("p",[t._v("If you need relate and item but you can't be certain the related item is already in the database, see "),a("router-link",{attrs:{to:"./create-elements-on-the-fly.html"}},[t._v("Creating Elements on The Fly")])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Sprout Import can help you resolve relationships based on attributes and criteria. In the most direct way, you can import known relational data using the same data structure as Craft – an array of Element IDs "),e("code",[this._v("[4, 5, 6]")]),this._v(":")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Sometimes you know you want to populate a relations field but you don't know the Element ID in Craft. In these cases, the "),e("code",[this._v("related")]),this._v(" key can come in handy. Consider the following scenarios:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"match-relations-by-slug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match-relations-by-slug","aria-hidden":"true"}},[this._v("#")]),this._v(" Match Relations by slug")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The code below says "),e("em",[this._v("if you find any Categories that are using the values “category-slug-one” or “category-slug-two” as their slug in the Category Group with ID number 1, then create a relationship with that category to the “categoryRelationsHandle” field on this Entry Element.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"match-assets-by-filename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match-assets-by-filename","aria-hidden":"true"}},[this._v("#")]),this._v(" Match Assets by filename")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The code below says "),e("em",[this._v('if you find any Assets that are using the value “ImageName03.jpg” as their filename in the Asset Source "images" in the folder with "folderId" equal to 8, then create a relationship with that Asset to the “thumbnailImage” field on this Entry Element.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"match-a-legacy-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match-a-legacy-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Match a Legacy ID")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The code below says "),e("em",[this._v('if you find any Users that have the values 89, 139 or 95 in the custom field with the handle "oldId" in the User Group with ID number 3, then create a relationship with that User to the “relatedAuthors” field on this Entry Element.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"matrix-relations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matrix-relations","aria-hidden":"true"}},[this._v("#")]),this._v(" Matrix Relations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"non-existent-relations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#non-existent-relations","aria-hidden":"true"}},[this._v("#")]),this._v(" Non-Existent Relations")])}],!1,null,null,null);e.default=s.exports}}]);