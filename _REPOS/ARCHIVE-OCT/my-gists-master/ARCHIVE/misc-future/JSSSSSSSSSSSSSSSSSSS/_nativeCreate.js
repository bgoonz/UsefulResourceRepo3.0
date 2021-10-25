const getNative = require("./_getNative");

/* Built-in method references that are verified to be native. */
const nativeCreate = getNative(Object, "create");

module.exports = nativeCreate;
