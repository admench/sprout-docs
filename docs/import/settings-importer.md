# Settings Importers

For lack of a better word, _Settings Importers_ refer to any importers that don't benefit from using the Element API to import data. While all Elements follow a similar import structure, settings may vary significantly from one another. Some examples include Fields, Entry Types, Asset Sources, and User Groups.

Add support for importing any Craft or custom plugin settings by creating a Settings Importer integration.

To add support for your custom settings you will need to:

1. Create a Settings Importer class that extends BaseSproutImportSettingsImporter
2. Register your Settings Importer

Sprout Import extends itself to add support for the default Settings Importers for Craft and Craft Commerce. Please refer to example Settings Importers in `sproutimport/integrations/sproutimport` and the `BaseSproutImportSettingsImporter` and `BaseSproutImportImporter` Classes for more details. 

Your importer will manage:

- Defining the data model you wish to import
- Populating the model
- Saving the model
- Deleting the model (for seed data)

Once you have created your custom Settings Importer you will need to register it in your primary plugin class via the `registerSproutImportImporters` hook. For example:

``` php
public function registerSproutImportImporters()
{
	return array(
		new Commerce_ProductTypeSproutImportSettingsImporter()
	);
}
```

## Settings Integrations

The following plugins have Settings Importer integrations:

- Sprout Email Campaign Type Settings