import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

// Need a css to noralize the link in accounts-ui.
import './aui-custom.css';

export const AUICustom = {
    _links: [],
    _buttons: [],
    addLinkForUser(title, id, url) {
        this._links.push({
            title,
            id,
            url: typeof url === 'function' ? url() : url,
        });
        return this._addEntries();
    },
    addButtonForUser(title, id, onClick) {
        this._buttons.push({ title, id, onClick });
        return this._addEntries();
    },
    _addEntries() {
        Template._loginButtonsLoggedInDropdownActions.onRendered(() => {
            AUICustom._links.forEach(link => {
                if (Meteor.user() && $(`#${link.id}`).length === 0) {
                    $('#login-buttons-open-change-password').before(`<a class="login-button aui-custom-link-in-dropdown" id="${link.id}" href="${link.url}">${link.title}</a>`);
                }
            });
            AUICustom._buttons.forEach(button => {
                if (Meteor.user() && $(`#${button.id}`).length === 0) {
                    $('#login-buttons-open-change-password').before(`<div class="login-button" id="${button.id}">${button.title}</div>`);
                    $('#login-buttons-open-account-page').on('click', button.onClick);
                }
            });
        });
    },
};
