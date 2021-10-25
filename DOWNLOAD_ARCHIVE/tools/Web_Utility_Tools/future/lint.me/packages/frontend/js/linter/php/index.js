import 'codemirror/mode/php/php';
import settingsFields from './settings-fields.html';
import settings from './settings';

const contentType = 'application/x-httpd-php';
const displayName = 'PHP validator';

export default {
    contentType,
    displayName,
    settingsFields,
    settings
};
