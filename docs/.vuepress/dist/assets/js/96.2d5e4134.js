(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{301:function(t,n,e){"use strict";e.r(n);var a=e(0),r=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h1",[t._v("Products & Variants")]),t._m(0),t._m(1),t._m(2),e("code-toggle",{attrs:{languages:["craft3","craft2"]}},[e("template",{slot:"craft3"},[e("div",{staticClass:"language-craft3 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Product",\n    "attributes": {\n      "typeId": 1,\n      "slug": "useful-product",\n      "postDate": {\n        "date": "5/14/2016",\n        "time": "9:45 AM"\n      },\n      "enabled": 1,\n      "taxCategoryId": 1,\n      "shippingCategoryId": 1,\n      "freeShipping": "",\n      "promotable": 1,\n      "orderLanguage": "en-US"\n    },\n    "variants": {\n      "new1": {\n        "sku": "ABCD-123",\n        "price": 16,\n        "hasUnlimitedStock": 1,\n        "minQty": "",\n        "maxQty": "",\n        "length": "",\n        "width": "",\n        "height": "",\n        "weight": ""\n      },\n      "new2": {\n        "sku": "ABCD-124",\n        "price": 18,\n        "hasUnlimitedStock": 1,\n        "minQty": "",\n        "maxQty": "",\n        "length": "",\n        "width": "",\n        "height": "",\n        "weight": ""\n      }\n    },\n    "content": {\n      "title": "Useful Product",\n      "fields": {\n        "body": "Product information"\n      }\n    }\n  }\n]\n')])])])]),e("template",{slot:"craft2"},[e("div",{staticClass:"language-craft2 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "@model": "Commerce_ProductModel",\n    "attributes": {\n      "typeId": 1,\n      "locale": "en_us",\n      "slug": "useful-product",\n      "postDate": {\n        "date": "1/01/2012",\n        "time": "10:00 AM"\n      },\n      "enabled": 1,\n      "taxCategoryId": 1,\n      "shippingCategoryId": 1,\n      "freeShipping": "",\n      "promotable": 1\n    },\n    "variants": {\n      "new1": {\n        "title": "Useful Product",\n        "sku": "ABCD-123",\n        "price": 1,\n        "unlimitedStock": 1,\n        "minQty": "",\n        "maxQty": "",\n        "length": "",\n        "width": "",\n        "height": "",\n        "weight": "",\n        "fields": { ... }\n      }\n    },\n    "content": {\n      "title": "Useful Product",\n      "fields": {\n        "body": "Product information"\n      }\n    }\n  }\n]\n\n')])])])])],2),t._m(3),t._m(4),e("code-toggle",{attrs:{languages:["craft3","craft2"]}},[e("template",{slot:"craft3"},[e("div",{staticClass:"language-craft3 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "@model": "barrelstrength\\\\sproutbase\\\\app\\\\import\\\\importers\\\\elements\\\\Product",\n    "attributes": {\n      "typeId": 1,\n      "slug": "useful-product",\n      "postDate": {\n        "date": "5/14/2016",\n        "time": "9:45 AM"\n      },\n      "enabled": 1,\n      "taxCategoryId": 1,\n      "shippingCategoryId": 1,\n      "freeShipping": "",\n      "promotable": 1,\n      "orderLanguage": "en-US"\n    },\n    "variants": {\n      "new1": {\n        "sku": "ABCD-123",\n        "price": 16,\n        "hasUnlimitedStock": 1,\n        "minQty": "",\n        "maxQty": "",\n        "length": "",\n        "width": "",\n        "height": "",\n        "weight": "",\n        "related": {\n          "relationsFieldHandle": {\n            "@model": "importer\\\\for\\\\target\\\\Element",\n            "params": { ... }\n          }\n        }\n      }\n    },\n    "content": {\n      "title": "Useful Product",\n      "fields": {\n        "body": "Product information"\n      },\n      "related": {\n        "relationsFieldHandle": {\n          "@model": "importer\\\\for\\\\target\\\\Element",\n          "params": { ... }\n        }\n      }\n    }\n  }\n]\n')])])])]),e("template",{slot:"craft2"},[e("div",{staticClass:"language-craft2 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "@model": "Commerce_ProductModel",\n    "attributes": {\n      "typeId": 1,\n      "locale": "en_us",\n      "slug": "useful-product",\n      "postDate": {\n        "date": "1/01/2012",\n        "time": "10:00 AM"\n      },\n      "enabled": 1,\n      "taxCategoryId": 1,\n      "shippingCategoryId": 1,\n      "freeShipping": "",\n      "promotable": 1\n    },\n    "content": {\n      "title": "Useful Product",\n      "fields": {\n          "body": "Product information"\n      },\n      "related": {\n        "assetFieldHandle": {\n          "@model": "AssetModel",\n          "matchBy": "filename",\n          "matchValue": ["product-photo.png"],\n          "matchCriteria": {\n            "source": "products"\n          }\n        },\n        "categoryFieldHandle": {\n          "@model": "CategoryModel",\n          "matchBy": "slug",\n          "matchValue": ["product-category"],\n          "matchCriteria": {\n              "groupId": 1\n          }\n        }\n      }\n    },\n    "variants": {\n      "new1": {\n        "title": "Useful Product",\n        "sku": "ABCD-123",\n        "price": 1,\n        "unlimitedStock": 1,\n        "minQty": "",\n        "maxQty": "",\n        "length": "",\n        "width": "",\n        "height": "",\n        "weight": "",\n        "fields": { ... },\n        "related": {\n          "assetFieldHandle": {\n            "@model": "AssetModel",\n            "matchBy": "filename",\n            "matchValue": ["variant-photo.png"],\n            "matchCriteria": {\n              "source": "products"\n            }\n          }\n        }\n      }\n    }\n  }\n]\n')])])])])],2)],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0},[n("p",[this._v("Sprout Import supports importing data to Craft Commerce Products Types with Product Fields and Variant Fields. Craft Commerce Products follow the same syntax as any other Element with the addition of a "),n("code",[this._v("variants")]),this._v(" key. All of the same enhanced functionality like the "),n("code",[this._v("related")]),this._v(" and "),n("code",[this._v("updateElement")]),this._v(" keys are available when importing Craft Commerce Products.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"products-variants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#products-variants","aria-hidden":"true"}},[this._v("#")]),this._v(" Products & Variants")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{pre:!0},[e("p",[t._v("Similar to the Matrix Field, when importing Variants using the "),e("code",[t._v("variants")]),t._v(" key, you can add an arbitrary number of variants using the convention "),e("code",[t._v("new1")]),t._v(", "),e("code",[t._v("new2")]),t._v(", "),e("code",[t._v("new3")]),t._v(", etc.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"related-products-variants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#related-products-variants","aria-hidden":"true"}},[this._v("#")]),this._v(" Related Products & Variants")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0},[n("p",[this._v("In this example we use the "),n("code",[this._v("related")]),this._v(" key to find a match for an Asset and Category Relation field to the Product, and an Asset Relation field for the Variant.")])])}],!1,null,null,null);r.options.__file="products-with-variants.md";n.default=r.exports}}]);