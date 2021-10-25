export const linterName = document.domain.split('.')[0];

export default new Promise((resolve, reject) => {
    switch (linterName) {
    case 'style':
    case 'css': {
        require.ensure([], require => resolve(require('./css').default), 'css-linter');
        break;
    }
    case 'html': {
        require.ensure([], require => resolve(require('./html').default), 'html-linter');
        break;
    }
    case 'php': {
        require.ensure([], require => resolve(require('./php').default), 'php-linter');
        break;
    }
    default: {
        reject(new Error(`Linter with name "${linterName}" isn't found`));
    }
    }
});
