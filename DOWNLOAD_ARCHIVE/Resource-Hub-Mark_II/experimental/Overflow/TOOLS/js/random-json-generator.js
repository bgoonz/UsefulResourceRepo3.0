var RandomJsonGenerator = function (opts) {
    if (!(this instanceof RandomJsonGenerator)) return new RandomJsonGenerator(opts);

    var self = this;

    self.possibleElements = opts.possibleElements
    self.maxDepth = opts.maxDepth;
    self.elementsPerBranch = opts.elementsPerBranch;
    self.stringType = opts.stringType;
    self.maxStringLength = opts.maxStringLength;
    self.satisfyDepth = opts.satisfyDepth;
    self.randomStringAlphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    self.randomKeyAlphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    self.randomKeyRestrictions = [];

    if (opts.randomStringAlphabet) {
        self.randomStringAlphabet = opts.randomStringAlphabet;
    }
    if (opts.randomKeyAlphabet) {
        self.randomKeyAlphabet = opts.randomKeyAlphabet;
    }
    if (opts.randomKeyRestrictions) {
        self.randomKeyRestrictions = opts.randomKeyRestrictions;
    }

    self.generate = function () {
        startingChoices = [];
        if (self.possibleElements.indexOf("objects") >= 0) {
            startingChoices.push({});
        }
        if (self.possibleElements.indexOf("arrays") >= 0) {
            startingChoices.push([]);
        }
        var startingElement = chooseOne(startingChoices);
        var generated = generateRandomJson(startingElement, self.elementsPerBranch, self.maxDepth, self.satisfyDepth);
        return generated;
    }

    function generateRandomString (alphabet) {
        if (self.stringType == "random") {
            var length = parseInt(Math.random()*(self.maxStringLength+1));
            var string = "";
            for (var i = 0; i < length; i++) {
              string += chooseOne(alphabet);
            }

            return string;
        }
        else {
            return WordDictionary.random();
        }
    }

    function generateRandomKey (alphabet, restrictions) {
        if (self.stringType == "random") {
            var length = parseInt(Math.random()*(self.maxStringLength+1));
            if (length == 0) {
                if (restrictions.indexOf("length-one-plus")>=0) {
                    length = 1;
                }
            }

            var string = "";
            for (var i = 0; i < length; i++) {
                var char = chooseOne(alphabet);
                if (i == 0) {
                    if (restrictions.indexOf("alpha-or-underscore-first")>=0) {
                        while (1) {
                            if (/^[a-zA-Z_]$/.test(char)) {
                                break;
                            }
                            var char = chooseOne(alphabet);
                        }
                    }
                }
                string += char;
            }

            return string;
        }
        else {
            return WordDictionary.random();
        }
    }

    function chooseOne (choices) {
        return choices[parseInt(Math.random()*choices.length)];
    }

    function generateRandomJson (startingElement, elementsPerBranch, depthLeft, satisfyDepth) {
        if (satisfyDepth) {
            // this guarantees that there are exactly elementsPerBranch elements in every branch
            //
            var elemsLeft = elementsPerBranch;
        }
        else {
            // this will generate up to elementsPerBranch elements in every branch
            //
            var elemsLeft = parseInt(Math.random()*elementsPerBranch);
        }

        if (depthLeft == 0) {
            // if depthLeft is 0, then arrays and objects can't be selected (as they increase depth by 1)
            //
            var possibleElementsAtDepthZero = self.possibleElements;
            ["arrays", "objects"].forEach(function (remove) {
                var removeIndex = possibleElementsAtDepthZero.indexOf(remove);
                if (removeIndex >= 0) {
                    possibleElementsAtDepthZero.splice(removeIndex,1);
                }
            });
            return generateRandomVal(possibleElementsAtDepthZero).val;
        }

        while (elemsLeft) {
            var randVal = generateRandomVal(self.possibleElements);
            if (randVal.type == "array" || randVal.type == "object") {
                var newVal = generateRandomJson(randVal.val, elementsPerBranch, depthLeft-1, satisfyDepth);
            }
            else {
                var newVal = randVal.val;
            }

            if (startingElement instanceof Array) {
                startingElement.push(newVal);
            }
            else if (typeof startingElement == "object") {
                var newKey = generateRandomKey(self.randomKeyAlphabet, self.randomKeyRestrictions);
                startingElement[newKey] = newVal;
            }

            elemsLeft--;
        }

        return startingElement;
    }

    function generateRandomVal (possibleElements) {
        var what = chooseOne(possibleElements);

        if (what == "booleans") {
            return {
                type : "boolean",
                val : chooseOne([true,false])
            };
        }

        if (what == "numbers") {
            var isInteger = chooseOne([true,false]);
            var isNegative = chooseOne([true,false]);

            var maxNum = 2147483648; // 2^32
            var x = Math.random()*maxNum;
            
            if (isInteger) {
                x = parseInt(x);
            }
            if (isNegative) {
                x = -x;
            }

            return {
                type : "number",
                val : x
            };
        }

        if (what == "strings") {
            return {
                type : "string",
                val : generateRandomString(self.randomStringAlphabet)
            }
        }

        if (what == "arrays") {
            return {
                type : "array",
                val : []
            }
        }

        if (what == "objects") {
            return {
                type: "object",
                val : {}
            }
        }
    }

    return self;
};
