/**
 * @fileoverview Disallow the use of process.env()
 * @author Vignesh Anand
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "disallow the use of `process.env`",
      category: "Node.js and CommonJS",
      recommended: false,
      url: "https://eslint.org/docs/rules/no-process-env",
    },

    schema: [],
  },

  create(context) {
    return {
      MemberExpression(node) {
        const objectName = node.object.name,
          propertyName = node.property.name;

        if (
          objectName === "process" &&
          !node.computed &&
          propertyName &&
          propertyName === "env"
        ) {
          context.report({ node, message: "Unexpected use of process.env." });
        }
      },
    };
  },
};
