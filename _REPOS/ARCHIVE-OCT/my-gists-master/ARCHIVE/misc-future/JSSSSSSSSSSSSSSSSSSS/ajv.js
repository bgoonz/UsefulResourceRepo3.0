/**
 * @fileoverview The instance of Ajv validator.
 * @author Evgeny Poberezkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Ajv = require("ajv"),
  metaSchema = require("ajv/lib/refs/json-schema-draft-04.json");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const ajv = new Ajv({
  meta: false,
  useDefaults: true,
  validateSchema: false,
  missingRefs: "ignore",
  verbose: true,
  schemaId: "auto",
});

ajv.addMetaSchema(metaSchema);
// eslint-disable-next-line no-underscore-dangle
ajv._opts.defaultMeta = metaSchema.id;

module.exports = ajv;
