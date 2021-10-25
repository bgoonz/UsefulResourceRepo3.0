function BitwiseOp(opts) {
    if (!(this instanceof BitwiseOp)) return new BitwiseOp(opts);

    var self = this;
    self.opts = opts;
    if (self.opts === undefined) {
        self.opts = {};
    }
    if (self.opts.inputBase === undefined) {
        self.opts.inputBase = 2;
    }
    if (self.opts.outputBase === undefined) {
        self.opts.outputBase = 2;
    }

    //
    // AND NAND
    //
    self.and = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise AND expects at least two values");
        }
        return performOp(vals, "and");
    }
    self.nand = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise NAND expects at least two values");
        }
        return performOp(vals, "nand");
    }

    //
    // OR NOR
    //
    self.or = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise OR expects at least two values");
        }
        return performOp(vals, "or");
    }
    self.nor = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise NOR expects at least two values");
        }
        return performOp(vals, "nor");
    }

    //
    // XOR XNOR
    //
    self.xor = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise XOR expects at least two values");
        }
        return performOp(vals, "xor");
    }
    self.xnor = function (vals) {
        if (vals.length < 2) {
            throw new Error("Bitwise XNOR expects at least two values");
        }
        return performOp(vals, "xnor");
    }

    //
    // Private functions
    //

    function performOp(vals, op) {
        var usableVals = nonEmptyVals(vals);

        if (self.opts.inputBase != 2) {
            // convert all input values to base 2
            for (var i = 0; i < usableVals.length; i++) {
                var val = usableVals[i];
                var newBase = new BigNumber(val, self.opts.inputBase);
                val = newBase.toString(2);
                usableVals[i] = val;
            }
        }

        // pad all vals with "0" to make them equal length
        var maxLength = 0;
        for (var i = 0; i < usableVals.length; i++) {
            var val = usableVals[i];
            if (val.length > maxLength) {
                maxLength = val.length;
            }
        }
        for (var i = 0; i < usableVals.length; i++) {
            var val = usableVals[i];
            if (val.length < maxLength) {
                var padCount = maxLength - val.length;
                for (var j = 0; j < padCount; j++) {
                    val = "0" + val;
                }
            }
            usableVals[i] = val;
        }

        var output = usableVals[0].split('');
        for (var i = 1; i < usableVals.length; i++) {
            var val = usableVals[i];
            for (var j = 0; j < output.length; j++) {
                if (op == "and" || op == "nand") {
                    output[j] = opAnd(val[j], output[j]);
                }
                else if (op == "or" || op == "nor") {
                    output[j] = opOr(val[j], output[j]);
                }
                else if (op == "xor" || op == "xnor") {
                    output[j] = opXor(val[j], output[j]);
                }
            }
        }

        if (op == "nand" || op == "nor" || op == "xnor") {
            for (var i = 0; i < output.length; i++) {
                if (output[i] == 1) {
                   output[i] = 0;
                }
                else {
                   output[i] = 1;
                }
            }
        }

        var outputBinary = output.join('');

        if (self.opts.outputBase != 2) {
            // convert output to the output base
            var bin = new BigNumber(outputBinary, 2);
            var newBase = bin.toString(self.opts.outputBase);
            return newBase;
        }
        return outputBinary;
    }

    function nonEmptyVals (vals) {
        var retVals = [];
        for (var i = 0; i < vals.length; i++) {
            var val = vals[i];
            if (val.length == 0) {
                // skip empty vals
                continue;
            }
            if (/^\s+$/.test(val)) {
                // skip blank vals
                continue;
            }
            retVals.push(val);
        }
        return retVals;
    }

    function opAnd (x, y) {
        if (x == 0 && y == 0) {
            // 0&0 = 0
            return 0;
        }
        else if (x == 0 && y == 1) {
            // 0&1 = 0
            return 0;
        }
        else if (x == 1 && y == 0) {
            // 1&0 = 0
            return 0;
        }
        else if (x == 1 && y == 1) {
            // 1&1 = 1
            return 1;
        }
    }

    function opOr (x, y) {
        if (x == 0 && y == 0) {
            // 0|0 = 0
            return 0;
        }
        else if (x == 0 && y == 1) {
            // 0|1 = 1
            return 1;
        }
        else if (x == 1 && y == 0) {
            // 1|0 = 1
            return 1;
        }
        else if (x == 1 && y == 1) {
            // 1|1 = 1
            return 1;
        }
    }

    function opXor (x, y) {
        if (x == 0 && y == 0) {
            // 0^0 = 0
            return 0;
        }
        else if (x == 0 && y == 1) {
            // 0^1 = 1
            return 1;
        }
        else if (x == 1 && y == 0) {
            // 1^0 = 1
            return 1;
        }
        else if (x == 1 && y == 1) {
            // 1^1 = 0
            return 0;
        }
    }
}
