Package.describe({
    name: 'vvd:aui-custom',
    version: '0.2.0_1',
    summary: 'Customize accounts-ui.',
    git: 'https://github.com/VividCloud/aui-custom',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.4.1');
    api.use('ecmascript', 'client');
    api.use('templating', 'client');
    api.use('accounts-ui-unstyled', 'client');
    api.use('reactive-var', 'client');
    api.use('aldeed:template-extension@4.0.0');
    api.addFiles('aui-custom.html', 'client');
    api.addFiles('aui-custom.css', 'client');
    api.mainModule('aui-custom.js', 'client');
});
