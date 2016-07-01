Package.describe({
    name: 'vvd:aui-custom',
    version: '0.1.0',
    summary: 'Customize accounts-ui.',
    git: 'https://github.com/VividCloud/aui-custom',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.4.1');
    api.use('ecmascript');
    api.use('templating');
    api.use('accounts-ui-unstyled');
    api.mainModule('aui-custom.js');
});
