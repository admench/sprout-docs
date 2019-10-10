(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{256:function(t,e,i){"use strict";i.r(e);var a=i(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[t._v("Notification Emails")]),t._v(" "),i("p",[t._v("Notifications Email Elements give you the power to manage your email notifications in a central location alongside your content in Craft CMS.")]),t._v(" "),i("h2",{attrs:{id:"default-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#default-setup"}},[t._v("#")]),t._v(" Default Setup")]),t._v(" "),i("p",[t._v("Creating a new Notification Email requires two steps:")]),t._v(" "),i("div",{pre:!0},[i("ol",[i("li",[i("p",[t._v("Define the Notification Email: You can create a new notification email and define it's Entry Template and Custom Field Layout in "),i("code",[t._v("Sprout Email->Settings (Gear Icon)->Notifications->New Notification")])])]),t._v(" "),i("li",[i("p",[t._v("Create the Notification Email: Once you have a notification email defined, you can add your content, set your sender and recipients, and set your rule that triggers the email in the Notification Entry.")])])])]),i("h4",[t._v("Define the Notification Email")]),t._v(" "),i("p",[i("strong",[t._v("Notification Name")]),i("br"),t._v("\nWhat you want to call the Notification internally.")]),t._v(" "),i("p",[i("strong",[t._v("Entry Template")]),i("br"),t._v("\nFor each email, you will want to create an HTML and a Text template.  Both your html and text templates will be determined from the template name you add here.  Do not include a filetype in your name, just the name of the file.")]),t._v(" "),i("p",[t._v("For example, if your Notification Entry Template name is:")]),t._v(" "),i("div",{staticClass:"language-html extra-class"},[i("pre",{pre:!0,attrs:{class:"language-html"}},[i("code",[t._v("_emails/notification\n")])])]),i("div",{pre:!0},[i("p",[t._v("Sprout Email will look for the following two templates in your templates folder. Your email template files must be named "),i("code",[t._v("email")]),t._v(".:")])]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("_emails/notification/_emails/email.twig (.html, etc.)\n_emails/notification/_emails/email.txt\n")])])]),i("h2",{attrs:{id:"email-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#email-settings"}},[t._v("#")]),t._v(" Email Settings")]),t._v(" "),i("p",[t._v("Notification Emails have several required settings:")]),t._v(" "),i("h3",{attrs:{id:"sender"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sender"}},[t._v("#")]),t._v(" Sender")]),t._v(" "),i("p",[t._v("Set the From Name, From Email, and Reply To Email.")]),t._v(" "),i("h3",{attrs:{id:"recipients"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recipients"}},[t._v("#")]),t._v(" Recipients")]),t._v(" "),i("p",[t._v("Add a comma-separated lists of recipients who you'd like to receive the email.  See the Dynamic Notifications doc page for more information on sending notifications to dynamic recipients like the person who submitted an Entry or completed a Form.")]),t._v(" "),i("p",[t._v("Additionally, you can create a "),i("RouterLink",{attrs:{to:"/reports/mailing-lists.html"}},[t._v("Mailing List")]),t._v(" and send to a list of people. Mailing Lists are a feature provided by Sprout Reports.")],1),t._v(" "),i("h3",{attrs:{id:"events"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),i("p",[t._v("Events allow you to choose what Notification Event will trigger a Notification Email and customize the Notification Event settings.")]),t._v(" "),i("p",[t._v("Each time your selected Event happens and your Notification Event settings pass validation, a Notification Email will be sent out to the defined Recipients.")]),t._v(" "),i("h3",{attrs:{id:"file-attachments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-attachments"}},[t._v("#")]),t._v(" File Attachments")]),t._v(" "),i("p",[t._v("File Attachments can be enabled in the Notification Email's Event settings. When File Attachments are enabled, Sprout Email will attach any files that are submitted to the Notification using the Craft Assets field or Sprout Forms File Upload field.")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("Large file attachments may cause Email Notifications to end up in spam filters or not be sent at all. Alternatively, consider sending Notification Emails with a link to the assets you wish to share.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);