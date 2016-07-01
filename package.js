Package.describe({
    name: 'vvd:aui-custom',
    version: '0.1.3',
    summary: 'Customize accounts-ui.',
    git: 'https://github.com/VividCloud/aui-custom',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.4.1');
    api.use('ecmascript', 'client');
    api.use('templating', 'client');
    api.use('accounts-ui-unstyled', 'client');
    api.mainModule('aui-custom.js', 'client');
});
