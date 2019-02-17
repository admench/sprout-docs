module.exports = {
    title: 'Sprout Documentation',
    description: 'The Sprout Business Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.',
    theme: 'craftdocs',
    base: '/docs/',
    ga: 'UA-26032077-1',
    themeConfig: {
        docsRepo: 'barrelstrength/sprout-docs',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: true,
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
            js: 'Javascript',
            craft2: 'Craft 2',
            craft3: 'Craft 3'
        },
        algolia: {
            apiKey: '9245da67ddab2b9ddda749bbb31362cf',
            indexName: 'sprout_barrelstrengthdesign'
        },
        nav: [
            {
                text: 'Plugin Docs',
                items: [
                    { text: 'Sprout Forms', link: '/forms/' },
                    { text: 'Sprout SEO', link: '/seo/' },
                    { text: 'Sprout Email', link: '/email/' },
                    { text: 'Sprout Reports', link: '/reports/' },
                    { text: 'Sprout Import', link: '/import/' },
                    { text: '–', link: '' },
                    { text: 'Sprout Active', link: '/active/' },
                    { text: 'Sprout Encode Email', link: '/encode-email/' },
                    { text: 'Sprout Fields', link: '/fields/' },
                    { text: 'Sprout Lists', link: '/lists/' },
                    { text: 'Sprout Notes', link: '/notes/' }
                ]
            },
            { text: 'Back to Sprout →', link: 'https://sprout.barrelstrengthdesign.com/' },
        ],
        sidebar: {
            '/forms/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'forms',
                        'form-fields',
                        'entries',
                        'notifications',
                        'reports',
                        'importing-data',
                        'plugin-settings'
                    ]
                },
                {
                    title: 'Form Fields',
                    collapsable: false,
                    children: [
                        'email-dropdown-field',
                        'hidden-field',
                        'invisible-field',
                        'opt-in-field'
                    ]
                },
                {
                    title: 'Form Templates',
                    collapsable: false,
                    children: [
                        'default-form-templates',
                        'template-overrides',
                        'rendering-options'
                    ]
                },
                {
                    title: 'Advanced Topics',
                    collapsable: false,
                    children: [
                        'payload-forwarding'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'front-end-file-uploads',
                        'hidden-fields',
                        'pre-populating-a-field',
                        'custom-html',
                        'display-errors-at-top-of-page',
                        'thank-you-page',
                        'submitting-a-form-via-ajax',
                        'submission-limit',
                        'translating-error-messages'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-form-templates',
                        'custom-form-fields',
                        'custom-captchas',
                        'events-and-hooks'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2',
                        'faq'
                    ]
                }
            ],

            '/seo/v2/': [
                ['../', '← Sprout SEO'],
                {
                    title: 'Sprout SEO 2',
                    collapsable: false,
                    children: [
                        '',
                        'divider',
                        'extending-a-base-layout',
                        'get-default-by-handle',
                        'get-optimized-meta',
                        'overriding-images'
                    ]
                }
            ],

            '/seo/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                        'faq'
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'global-metadata',
                        'element-metadata-field',
                        'sitemaps',
                        'redirects',
                        'plugin-settings'
                    ]
                },
                {
                    title: 'Advanced Topics',
                    collapsable: false,
                    children: [
                        'template-overrides',
                        'custom-metadata-variable',
                        'custom-sections'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'canonical-override',
                        'block-robots-on-dev-site',
                        'elements-without-urls',
                        'large-sitemaps'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-schema',
                        'custom-url-enabled-sections'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'notification-emails',
                        'campaign-emails',
                        'sent-emails',
                        'plugin-settings'
                    ]
                },
                {
                    title: 'Notification Emails',
                    collapsable: false,
                    children: [
                        'personalization',
                        'object-syntax'
                    ]
                },
                {
                    title: 'Email Templates',
                    collapsable: false,
                    children: [
                        'default-email-templates',
                        'template-overrides'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'craft-globals',
                        'welcome-notification'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-email-templates',
                        'custom-mailers',
                        'custom-notification-events'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/reports/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'data-sources',
                        'reports'
                    ]
                },
                {
                    title: 'Data Sources',
                    collapsable: false,
                    children: [
                        'custom-query-report',
                        'custom-twig-template-report'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'large-reports',
                        'sql-queries'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'custom-data-sources'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/import/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        '',
                        'supported-data-types',
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'resolve-relationships',
                        'related-attributes',
                        'create-elements-on-the-fly',
                        'update-existing-elements',
                        'set-default-attributes',
                        'multiple-sites',
                        'multiple-import-types',
                        'large-amounts-of-data',
                        'console-commands'
                    ]
                },
                {
                    title: 'Element Importers',
                    collapsable: false,
                    children: [
                        'assets',
                        'categories',
                        'entries',
                        'matrix-field',
                        'orders',
                        'products-with-variants',
                        'tags',
                        'users'
                    ]
                },
                {
                    title: 'Settings Importers',
                    collapsable: false,
                    children: [
                        'fields',
                        'sections',
                        'widgets'
                    ]
                },
                {
                    title: 'Bundles',
                    collapsable: false,
                    children: [
                        'longform-content-matrix',
                        'navigation-using-structures',
                        'simple-blog',
                    ]
                },
                {
                    title: 'Seed Data',
                    collapsable: false,
                    children: [
                        'faker-and-fake-data',
                        'generating-lots-of-data'
                    ]
                },
                {
                    title: 'Examples',
                    collapsable: false,
                    children: [
                        'expressionengine-export'
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'element-importers',
                        'field-importers',
                        'settings-importer'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/active/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/encode-email/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/fields/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Field Types',
                    collapsable: false,
                    children: [
                        'address-field',
                        'email-field',
                        'gender-field',
                        'name-field',
                        'notes-field',
                        'phone-field',
                        'predefined-field',
                        'regular-expression-field',
                        'url-field'
                    ]
                },
                {
                    title: 'Field Types - Craft 2',
                    collapsable: false,
                    children: [
                        'email-dropdown-field',
                        'hidden-field',
                        'invisible-field',
                        'notes-field-c2',
                        'phone-field-c2'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/lists/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Plugin Development',
                    collapsable: false,
                    children: [
                        'list-types'
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            '/notes/': [
                ['../', '← All Plugins'],
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'Installing & Updating',
                    collapsable: false,
                    children: [
                        'installing-and-updating-craft-3',
                        'installing-and-updating-craft-2'
                    ]
                }
            ],

            // fallback
            '/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '/',
                        'why-sprout',
                        'core-concepts',
                        'integrations',
                        'multi-site',
                        'businesses'
                    ]
                },
                {
                    title: 'Business Suite',
                    collapsable: false,
                    children: [
                        ['forms/', 'Sprout Forms'],
                        ['seo/', 'Sprout SEO'],
                        ['email/', 'Sprout Email'],
                        ['reports/', 'Sprout Reports'],
                        ['import/', 'Sprout Import']
                    ]
                },
                {
                    title: 'Open Source',
                    collapsable: false,
                    children: [
                        ['active/', 'Sprout Active'],
                        ['encode-email/', 'Sprout Encode Email'],
                        ['fields/', 'Sprout Fields'],
                        ['lists/', 'Sprout Lists'],
                        ['notes/', 'Sprout Notes']
                    ]
                },
                {
                    title: 'Support',
                    collapsable: false,
                    children: [
                        'support/feature-requests',
                        'support/bugs',
                        'support/changelog',
                        'support/pricing',
                        'support/training',
                        'support/support'
                    ]
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        ['tools/php-storm', 'PhpStorm'],
                        ['tools/sublime-text', 'Sublime Text'],
                        ['tools/craftnet', 'Craftnet']
                    ]
                }
            ]
        }
    },
    markdown: {
        anchor: { level: [2, 3] },
        config(md) {
            let markup = require('vuepress-theme-craftdocs/markup');
            md.use(markup);
        }
    }
};
