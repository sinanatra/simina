<?php

return [
    // 'community.markdown-field.buttons' => ['bold', 'italic', 'pagelink', 'image', 'link', 'email'],
    // 'community.markdown-field.font' => [
    //     'family' => 'sans-serif',
    //     'scaling' => false,
    //     'size' => 'regular',
    // ],

    // 'thumbs' => [
    //     'srcsets' => [
    //         // For mobile (420px), 1280px, 1800px, 2560px
    //         'slideshow' => [420, 640, 900, 1280]
    //     ],
    //     'presets' => [
    //         'blur' => ['width' => 150, 'height' => 150, 'quality' => 30]
    //     ]
    // ],

    // 'panel' => array('css' => 'assets/css/panel.css'),

    'debug' => true,
    // 'debug'  => true,
    // 'cache' => [
    //   'pages' => [
    //     'active' => true
    //   ]
    // ],

    // 'bnomei.robots-txt.sitemap' => './sitemap.xml',
    // 'bnomei.robots-txt.groups' => [ 
    //     '*' => [
    //         'disallow' => [
    //             '/kirby/',
    //             '/site/',
    //         ],
    //         'allow' => [
    //             '/media/',
    //         ]
    //     ]
    // ],

    // 'omz13.xmlsitemap' => [
    //   'cacheTTL' => 0,
    // ],

    'routes' => [],

    // 'smartypants' => true,

    // 'medienbaecker.autoresize.maxWidth' => 2560,
    // 'sylvainjule.matomo.url'        => 'https://giacomonanni.info/matomo/',
    // 'sylvainjule.matomo.id'         => '4',
    // 'sylvainjule.matomo.token'      => '3d7f7c8bf87fb50b0ea6846aef6584aa',
    'd4l' => [
        'static_site_generator' => [
          'endpoint' => "generate-static-site", # set to any string like 'generate-static-site' to use the built-in endpoint (necessary when using the blueprint field)
          'output_folder' => './static', # you can specify an absolute or relative path
          'preserve' => [], # preserve individual files / folders in the root level of the output folder (anything starting with "." is always preserved)
          'base_url' => '/', # if the static site is not mounted to the root folder of your domain, change accordingly here
          'skip_media' => false, # set to true to skip copying media files, e.g. when they are already on a CDN; combinable with 'preserve' => ['media']
          'skip_templates' => [], # ignore pages with given templates (home is always rendered)
          'custom_routes' => [], # see below for more information on custom routes
          'custom_filters' => [], # see below for more information on custom filters
          'ignore_untranslated_pages' => false, # set to true to ignore pages without an own language
          'index_file_name' => 'index.html' # you can change the directory index file name, e.g. to 'index.json' when generating an API
        ]
      ]
   ];
