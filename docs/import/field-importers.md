# Field Importers

Field Importers can be created to add support for additional types of mock data. Field Importers allow you to define representative data that you can use to seed your database for testing or design workflows.

_While the Field Importer name implies they may have a role in importing data, any real content you import into fields is handled primarily by the Element Importers and the Custom Fields related to the Elements being imported and the Settings Importer for Fields._

To add support for your custom fields you will need to:

1. Create a Field Importer class that extends `barrelstrength\sproutbase\contracts\sproutimport\FieldImporter`
2. Register your Field Importer

To register your Element Importer, you can register your custom Element Importer class using the `EVENT_REGISTER_IMPORTER_TYPES` event:

``` php
use barrelstrength\sproutbase\services\sproutimport\Importers;

Event::on(Importers::class, Importers::EVENT_REGISTER_IMPORTER_TYPES, function(RegisterComponentTypesEvent $event) {
    $event->types[] = CustomFieldImporter::class;
});
```

Please refer to example Settings Importers in `sproutimport/src/integrations/sproutimport/fields` and `sproutbase/src/contracts/sproutimport/Importer` and `sproutbase/src/contracts/sproutimport/FieldImporter` for more details.

## Field Integrations

The following fields have Field Importer integrations:

- Sprout Fields Email Address Field
- Sprout Fields Email Select Field
- Sprout Fields Hidden Field
- Sprout Fields Invisible Field
- Sprout Fields Link Field
- Sprout Fields Phone Number Field