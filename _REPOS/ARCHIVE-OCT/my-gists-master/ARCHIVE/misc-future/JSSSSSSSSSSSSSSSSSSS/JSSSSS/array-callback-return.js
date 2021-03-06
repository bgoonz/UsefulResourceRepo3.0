/**
 * @fileoverview Rule to enforce return statements in callbacks of array's methods
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const lodash = require("lodash");

const astUtils = require("../util/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const TARGET_NODE_TYPE = /^(?:Arrow)?FunctionExpression$/u;
const TARGET_METHODS =
  /^(?:every|filter|find(?:Index)?|map|reduce(?:Right)?|some|sort)$/u;

/**
 * Checks a given code path segment is reachable.
 *
 * @param {CodePathSegment} segment - A segment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
  return segment.reachable;
}

/**
 * Gets a readable location.
 *
 * - FunctionExpression -> the function name or `function` keyword.
 * - ArrowFunctionExpression -> `=>` token.
 *
 * @param {ASTNode} node - A function node to get.
 * @param {SourceCode} sourceCode - A source code to get tokens.
 * @returns {ASTNode|Token} The node or the token of a location.
 */
function getLocation(node, sourceCode) {
  if (node.type === "ArrowFunctionExpression") {
    return sourceCode.getTokenBefore(node.body);
  }
  return node.id || node;
}

/**
 * Checks a given node is a MemberExpression node which has the specified name's
 * property.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is a MemberExpression node which has
 *      the specified name's property
 */
function isTargetMethod(node) {
  return (
    node.type === "MemberExpression" &&
    TARGET_METHODS.test(astUtils.getStaticPropertyName(node) || "")
  );
}

/**
 * Checks whether or not a given node is a function expression which is the
 * callback of an array method.
 *
 * @param {ASTNode} node - A node to check. This is one of
 *      FunctionExpression or ArrowFunctionExpression.
 * @returns {boolean} `true` if the node is the callback of an array method.
 */
function isCallbackOfArrayMethod(node) {
  let currentNode = node;

  while (currentNode) {
    const parent = currentNode.parent;

    switch (parent.type) {
      /*
       * Looks up the destination. e.g.,
       * foo.every(nativeFoo || function foo() { ... });
       */
      case "LogicalExpression":
      case "ConditionalExpression":
        currentNode = parent;
        break;

      /*
       * If the upper function is IIFE, checks the destination of the return value.
       * e.g.
       *   foo.every((function() {
       *     // setup...
       *     return function callback() { ... };
       *   })());
       */
      case "ReturnStatement": {
        const func = astUtils.getUpperFunction(parent);

        if (func === null || !astUtils.isCallee(func)) {
          return false;
        }
        currentNode = func.parent;
        break;
      }

      /*
       * e.g.
       *   Array.from([], function() {});
       *   list.every(function() {});
       */
      case "CallExpression":
        if (astUtils.isArrayFromMethod(parent.callee)) {
          return (
            parent.arguments.length >= 2 && parent.arguments[1] === currentNode
          );
        }
        if (isTargetMethod(parent.callee)) {
          return (
            parent.arguments.length >= 1 && parent.arguments[0] === currentNode
          );
        }
        return false;

      // Otherwise this node is not target.
      default:
        return false;
    }
  }

  /* istanbul ignore next: unreachable */
  return false;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",

    docs: {
      description: "enforce `return` statements in callbacks of array methods",
      category: "Best Practices",
      recommended: false,
      url: "https://eslint.org/docs/rules/array-callback-return",
    },

    schema: [
      {
        type: "object",
        properties: {
          allowImplicit: {
            type: "boolean",
            default: false,
          },
        },
        additionalProperties: false,
      },
    ],

    messages: {
      expectedAtEnd: "Expected to return a value at the end of {{name}}.",
      expectedInside: "Expected to return a value in {{name}}.",
      expectedReturnValue: "{{name}} expected a return value.",
    },
  },

  create(context) {
    const options = context.options[0] || { allowImplicit: false };

    let funcInfo = {
      upper: null,
      codePath: null,
      hasReturn: false,
      shouldCheck: false,
      node: null,
    };

    /**
     * Checks whether or not the last code path segment is reachable.
     * Then reports this function if the segment is reachable.
     *
     * If the last code path segment is reachable, there are paths which are not
     * returned or thrown.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {void}
     */
    function checkLastSegment(node) {
      if (
        funcInfo.shouldCheck &&
        funcInfo.codePath.currentSegments.some(isReachable)
      ) {
        context.report({
          node,
          loc: getLocation(node, context.getSourceCode()).loc.start,
          messageId: funcInfo.hasReturn ? "expectedAtEnd" : "expectedInside",
          data: {
            name: astUtils.getFunctionNameWithKind(funcInfo.node),
          },
        });
      }
    }

    return {
      // Stacks this function's information.
      onCodePathStart(codePath, node) {
        funcInfo = {
          upper: funcInfo,
          codePath,
          hasReturn: false,
          shouldCheck:
            TARGET_NODE_TYPE.test(node.type) &&
            node.body.type === "BlockStatement" &&
            isCallbackOfArrayMethod(node) &&
            !node.async &&
            !node.generator,
          node,
        };
      },

      // Pops this function's information.
      onCodePathEnd() {
        funcInfo = funcInfo.upper;
      },

      // Checks the return statement is valid.
      ReturnStatement(node) {
        if (funcInfo.shouldCheck) {
          funcInfo.hasReturn = true;

          // if allowImplicit: false, should also check node.argument
          if (!options.allowImplicit && !node.argument) {
            context.report({
              node,
              messageId: "expectedReturnValue",
              data: {
                name: lodash.upperFirst(
                  astUtils.getFunctionNameWithKind(funcInfo.node)
                ),
              },
            });
          }
        }
      },

      // Reports a given function if the last path is reachable.
      "FunctionExpression:exit": checkLastSegment,
      "ArrowFunctionExpression:exit": checkLastSegment,
    };
  },
};
