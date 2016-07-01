# vvd:aui-custom

This package helps you customize `accounts-ui` in Meteor. For now, this package can add entries
in the dropdown of `accounts-ui` for users.

## Usage

```javascript
import { AUICustom } from 'meteor/vvd:aui-custom';

// Do below on startup.

// Add a link to accounts-ui dropdown:
// Title, id and URL.
// The third param is the link URL, a function or a string.
// Notice that you can't simply use a template string containing a reactive data source.

AUICustom.addLinkForUser('My profile', 'my-profile', () => `/u/${Meteor.user().username}`);

// Add a button which fires a normal event:
// Title, id and event handler for `click`.

AUICustom.addButtonForUser('Grab your daily gifts', 'grab-gifts',
    () => alert('Sorry, you\'re fooled!'));

```

## License

MIT
