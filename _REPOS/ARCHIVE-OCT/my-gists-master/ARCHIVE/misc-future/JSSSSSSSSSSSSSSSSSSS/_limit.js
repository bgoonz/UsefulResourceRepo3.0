"use strict";
module.exports = function generate__limit(it, $keyword, $ruleType) {
  let out = " ";
  const $lvl = it.level;
  const $dataLvl = it.dataLevel;
  const $schema = it.schema[$keyword];
  const $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  let $errSchemaPath = it.errSchemaPath + "/" + $keyword;
  const $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  const $data = "data" + ($dataLvl || "");
  let $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out +=
      " var schema" +
      $lvl +
      " = " +
      it.util.getData($schema.$data, $dataLvl, it.dataPathArr) +
      "; ";
    $schemaValue = "schema" + $lvl;
  } else {
    $schemaValue = $schema;
  }
  const $isMax = $keyword == "maximum";
  const $exclusiveKeyword = $isMax ? "exclusiveMaximum" : "exclusiveMinimum";
  const $schemaExcl = it.schema[$exclusiveKeyword];
  const $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data;
  const $op = $isMax ? "<" : ">";
  let $notOp = $isMax ? ">" : "<";
  const $errorKeyword = undefined;
  if ($isDataExcl) {
    let $schemaValueExcl = it.util.getData(
      $schemaExcl.$data,
      $dataLvl,
      it.dataPathArr
    );

    var $exclusive = "exclusive" + $lvl;
    const $exclType = "exclType" + $lvl;
    var $exclIsNumber = "exclIsNumber" + $lvl;
    var $opExpr = "op" + $lvl;
    var $opStr = "' + " + $opExpr + " + '";
    out += " var schemaExcl" + $lvl + " = " + $schemaValueExcl + "; ";
    $schemaValueExcl = "schemaExcl" + $lvl;
    out +=
      " var " +
      $exclusive +
      "; var " +
      $exclType +
      " = typeof " +
      $schemaValueExcl +
      "; if (" +
      $exclType +
      " != 'boolean' && " +
      $exclType +
      " != 'undefined' && " +
      $exclType +
      " != 'number') { ";
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ""; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out +=
        " { keyword: '" +
        ($errorKeyword || "_exclusiveLimit") +
        "' , dataPath: (dataPath || '') + " +
        it.errorPath +
        " , schemaPath: " +
        it.util.toQuotedString($errSchemaPath) +
        " , params: {} ";
      if (it.opts.messages !== false) {
        out += " , message: '" + $exclusiveKeyword + " should be boolean' ";
      }
      if (it.opts.verbose) {
        out +=
          " , schema: validate.schema" +
          $schemaPath +
          " , parentSchema: validate.schema" +
          it.schemaPath +
          " , data: " +
          $data +
          " ";
      }
      out += " } ";
    } else {
      out += " {} ";
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += " throw new ValidationError([" + __err + "]); ";
      } else {
        out += " validate.errors = [" + __err + "]; return false; ";
      }
    } else {
      out +=
        " var err = " +
        __err +
        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    }
    out += " } else if ( ";
    if ($isData) {
      out +=
        " (" +
        $schemaValue +
        " !== undefined && typeof " +
        $schemaValue +
        " != 'number') || ";
    }
    out +=
      " " +
      $exclType +
      " == 'number' ? ( (" +
      $exclusive +
      " = " +
      $schemaValue +
      " === undefined || " +
      $schemaValueExcl +
      " " +
      $op +
      "= " +
      $schemaValue +
      ") ? " +
      $data +
      " " +
      $notOp +
      "= " +
      $schemaValueExcl +
      " : " +
      $data +
      " " +
      $notOp +
      " " +
      $schemaValue +
      " ) : ( (" +
      $exclusive +
      " = " +
      $schemaValueExcl +
      " === true) ? " +
      $data +
      " " +
      $notOp +
      "= " +
      $schemaValue +
      " : " +
      $data +
      " " +
      $notOp +
      " " +
      $schemaValue +
      " ) || " +
      $data +
      " !== " +
      $data +
      ") { var op" +
      $lvl +
      " = " +
      $exclusive +
      " ? '" +
      $op +
      "' : '" +
      $op +
      "='; ";
    if ($schema === undefined) {
      $errorKeyword = $exclusiveKeyword;
      $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
      $schemaValue = $schemaValueExcl;
      $isData = $isDataExcl;
    }
  } else {
    var $exclIsNumber = typeof $schemaExcl == "number",
      $opStr = $op;
    if ($exclIsNumber && $isData) {
      var $opExpr = "'" + $opStr + "'";
      out += " if ( ";
      if ($isData) {
        out +=
          " (" +
          $schemaValue +
          " !== undefined && typeof " +
          $schemaValue +
          " != 'number') || ";
      }
      out +=
        " ( " +
        $schemaValue +
        " === undefined || " +
        $schemaExcl +
        " " +
        $op +
        "= " +
        $schemaValue +
        " ? " +
        $data +
        " " +
        $notOp +
        "= " +
        $schemaExcl +
        " : " +
        $data +
        " " +
        $notOp +
        " " +
        $schemaValue +
        " ) || " +
        $data +
        " !== " +
        $data +
        ") { ";
    } else {
      if ($exclIsNumber && $schema === undefined) {
        $exclusive = true;
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
        $schemaValue = $schemaExcl;
        $notOp += "=";
      } else {
        if ($exclIsNumber)
          $schemaValue = Math[$isMax ? "min" : "max"]($schemaExcl, $schema);
        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
          $notOp += "=";
        } else {
          $exclusive = false;
          $opStr += "=";
        }
      }
      var $opExpr = "'" + $opStr + "'";
      out += " if ( ";
      if ($isData) {
        out +=
          " (" +
          $schemaValue +
          " !== undefined && typeof " +
          $schemaValue +
          " != 'number') || ";
      }
      out +=
        " " +
        $data +
        " " +
        $notOp +
        " " +
        $schemaValue +
        " || " +
        $data +
        " !== " +
        $data +
        ") { ";
    }
  }
  $errorKeyword = $errorKeyword || $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ""; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out +=
      " { keyword: '" +
      ($errorKeyword || "_limit") +
      "' , dataPath: (dataPath || '') + " +
      it.errorPath +
      " , schemaPath: " +
      it.util.toQuotedString($errSchemaPath) +
      " , params: { comparison: " +
      $opExpr +
      ", limit: " +
      $schemaValue +
      ", exclusive: " +
      $exclusive +
      " } ";
    if (it.opts.messages !== false) {
      out += " , message: 'should be " + $opStr + " ";
      if ($isData) {
        out += "' + " + $schemaValue;
      } else {
        out += "" + $schemaValue + "'";
      }
    }
    if (it.opts.verbose) {
      out += " , schema:  ";
      if ($isData) {
        out += "validate.schema" + $schemaPath;
      } else {
        out += "" + $schema;
      }
      out +=
        "         , parentSchema: validate.schema" +
        it.schemaPath +
        " , data: " +
        $data +
        " ";
    }
    out += " } ";
  } else {
    out += " {} ";
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += " throw new ValidationError([" + __err + "]); ";
    } else {
      out += " validate.errors = [" + __err + "]; return false; ";
    }
  } else {
    out +=
      " var err = " +
      __err +
      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  out += " } ";
  if ($breakOnError) {
    out += " else { ";
  }
  return out;
};
