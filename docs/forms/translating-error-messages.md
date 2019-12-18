# Translating Error Messages

If you need to translate your Form error messages, currently, you will need to use [static translations](https://craftcms.com/support/static-translations).

Let's look at a brief overview of this method in the context of the Form plugin.

1) Wrap your error messages in the translate filter

::: code

``` twig Craft 3
{% if errors -%}
    <ul class="errors">
        {% for error in errors %}
            <li>{{ error|t('site') }}</li>
        {% endfor %}
    </ul>
{% endif -%}
```

``` twig Craft 2
{{ error|translate }}

{# You can abbreviate the translate filter with a 't' #}
{{ error|t }}

{# If you are using a macro to display your errors, you only
   have to wrap the error variable in a 't' #}
{% macro errorList(errors) %}
	{% if errors %}
		<ul class="errors">
			{% for error in errors %}
				<li>{{ error|t }}</li>
			{% endfor %}
		</ul>
	{% endif %}
{% endmacro %}
```
:::

2) Add a `translations` folder to your project

::: code

``` text{3} Craft 3
config 
storage
translations
vendor
web
```

``` text{5} Craft 2
craft/app
craft/config
craft/plugins
craft/storage
craft/translations
public
```
:::

3) Add a locale-specific translation file to your project

Add a file to the `craft/translations` folder for the locale you wish to provide translations.

``` html
craft/translations/en_gb.php
```

In that file, add add an array of the translations you wish to include:

``` php
<?php

return array(
	'Email Field cannot be blank' => 
	'Whatever you want to translate the original message to'
);
```

The first item in the array is the default message that you want to translate.  The second item in the array is your translation.  You can translate from one language into another, or even within the same language if you want to change the default error messaging.

If you need to translate multiple phrases, you can add multiple phrases to your translation file and separate them by commas:

``` php
<?php

return array(
	'Email Field cannot be blank' => 
	'Whatever you want to translate the original message to',

	'Phone Field cannot be blank' => 
	'A new error message'
);
```