# Creating Elements On The Fly

There are two methods to make sure that related items exist during your imports. The appropriate method for you will depend on your preference and your specific data set.

1. Import the related items first, then use the `related` key to match them based on a known attribute. See [Resolving Relationships](./resolve-relationships.md) for more info on this method.
2. Try to match related items using the `related` key, and dynamically create the related items if no match is found using the `createIfNotFound` and `newElements` keys.

In this example, we first try to match related categories by slug, and if we don't find them, we also define the elements so they can be created on the fly using the `createIfNotFound` and `newElements` keys.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "categoryHandle": {
          "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Category",
          "params": {
            "slug": ["san-francisco", "london"]
          },
          "createIfNotFound": true,
          "newElements": [
            {
              "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Category",
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "San Francisco"
              }
            },
            {
              "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Category",
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "London"
              }
            }
          ]
        }
      }
    }
  }
]
```

``` craft2
[
  {
    "@model": "EntryModel",
    "attributes": { ... },
    "content": {
      "title": "In quaerat maiores sit est rerum iusto.",
      "fields": { ... },
      "related": {
        "categoryHandle": {
          "@model": "CategoryModel",
          "matchBy": "slug",
          "matchValue": ["san-francisco", "london"],
          "createIfNotFound": true,
          "newElements": [
            {
              "@model": "CategoryModel"
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "San Francisco"
              }
            },
            {
              "@model": "CategoryModel"
              "attributes": {
                "groupId": 1,
                "enabled": true
              },
              "content": {
                "title": "London"
              }
            }
          ]
        }
      }
    }
  }
]
```

:::

This behavior requires two keys within the `related` tag.

- **createIfNotFound** must be set to `true`, to trigger this behavior
- **newElements** must provide one or more model definitions of an Element that matches the type of Element allowed by the Relation. Each item defined within the `newElements` key, follows the same Craft JSON Format syntax as importing an element on its own.

