import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/aldeed:template-extension';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

import './aui-custom.html';
// Need a css to normalize the link in accounts-ui.
import './aui-custom.css';

// Define helpers we used in our modified template.
Template._loginButtonsLoggedInDropdownActions.helpers({
    auiDropdownLinks: () => AUICustom._reactiveLinks.get(),
    auiDropdownButtonss: () => AUICustom._reactiveButtons.get(),
    auiUrl: (url) => typeof url === 'function' ? url() : url,
});

// Finally, replace!
Template.aui_loginButtonsLoggedInDropdownActions.replaces('_loginButtonsLoggedInDropdownActions');

export const AUICustom = {
    _links: [],
    _buttons: [],
    _reactiveLinks: new ReactiveVar([]),
    _reactiveButtons: new ReactiveVar([]),
    addLinkForUser(title, id, url) {
        const exist = this._links.findIndex(el => el.id === id);
        if (exist === -1) {
            this._links.push({ title, id, url });
        } else {
            // Override the old one.
            this._links[exist] = { title, id, url };
        }
        return this._addEntries();
    },
    addButtonForUser(title, id, onClick) {
        const exist = this._buttons.findIndex(el => el.id === id);
        if (exist === -1) {
            this._buttons.push({ title, id, onClick });
        } else {
            this._buttons[exist] = { title, id, onClick };
        }
        return this._addEntries();
    },
    _addEntries() {
        // Apply modifications to the actually-used _reactive*, which are ReactiveVars.
        this._reactiveLinks.set(this._links);
        this._reactiveButtons.set(this._buttons);
    },
};
