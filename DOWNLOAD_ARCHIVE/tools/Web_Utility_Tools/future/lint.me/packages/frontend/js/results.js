import MatreshkaArray from 'matreshka/array';
import prop from 'matreshka/binders/prop';

export default class Results extends MatreshkaArray {
    itemRenderer = '<pre class="results-item">{{ text }}</pre>';
    constructor() {
        super()
            .set({
                noWarnings: false
            })
            .bindNode({
                sandbox: '.results',
                noWarnings: {
                    node: ':sandbox .results-no-warnings',
                    binder: prop('hidden', value => (value ? false : true))
                }
            });
    }
}
