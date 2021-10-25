import 'babel-polyfill';
import MatreshkaObject from 'matreshka/object';
import html from 'matreshka/binders/html';
import prop from 'matreshka/binders/prop';
import codeMirror from 'matreshka-binder-codemirror';
import parseForm from 'matreshka-parse-form';
import linterPromise, { linterName } from './linter';
import Results from './results';
import { isUri } from 'valid-url';
import 'codemirror/addon/display/placeholder';

class Application extends MatreshkaObject {
    constructor() {
        super()
            .instantiate('results', Results)
            .on({
                'submit::form': async (evt) => {
                    evt.preventDefault();

                    const url = this.code.trim();

                    if (isUri(url)) {
                        let resp;
                        try {
                            resp = await (
                                await fetch('/api/proxy', {
                                    method: 'post',
                                    headers: {
                                        'Content-type': 'application/json'
                                    },
                                    body: JSON.stringify({ url: this.code })
                                })
                            ).json();
                        } catch (e) {
                            this.results = [{ text: e }];

                            return;
                        }

                        const { body, error } = resp;

                        if(error) {
                            this.results = [{ text: error }];

                            return;
                        }

                        this.code = body;

                        this.lint();
                    } else {
                        this.lint();
                    }
                },
                'reset::form': (evt) => {
                    evt.preventDefault();
                    this.code = '';
                },
                'change:code': evt => {
                    this.results.noWarnings = false;
                },
                'settings@change': evt => {
                    localStorage.settings = JSON.stringify(this.settings);
                }
            });

        this.initialize();
    }

    async initialize() {
        const {
            contentType,
            displayName,
            settingsFields,
            settings
        } = await linterPromise;

        Object.assign(settings, JSON.parse(localStorage.settings || '{}'));

        this
            .set({
                contentType,
                displayName,
                settings,
                linterName
            })
            .bindNode({
                sandbox: 'main',
                form: ':sandbox .lint-form',
                code: [{
                    node: ':sandbox .code',
                    binder: codeMirror({
                        mode: contentType,
                        lineNumbers: true
                    })
                }, {
                    node: ':sandbox button[type="submit"], :sandbox button[type="reset"]',
                    binder: prop('disabled', value => !value)
                }],
                displayName: {
                    node: ':sandbox h1',
                    binder: html()
                }
            });


        this.nodes.form.appendChild(parseForm(settings, settingsFields));
    }

    async lint() {
        const { code, settings } = this;
        try {
            const { warnings } = await (
                await fetch(`/api/lint/${linterName}`, {
                    method: 'post',
                    body: JSON.stringify({ code, settings }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            ).json();

            this.results = warnings;
            this.results.noWarnings = !warnings.length;
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new Application();
