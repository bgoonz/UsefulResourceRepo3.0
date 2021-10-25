$(function () {
    mkTool(
        'random-json',
        function () {
            var elements = parseInt($('#random-json-elements').val(), 10);
            var depth = parseInt($('#random-json-depth').val(), 10);

            var start = [[],{}][parseInt(Math.random()*2)];
            var randomJson = generate_random_json(start, elements, depth-1);

            return JSON.stringify(randomJson, null, 1);
        },
        {
            allowEmptyText : true
        }
    );

    function generate_random_json(starting_element, elements_per_branch, depth_left) {
        //var elems_left = elements_per_branch; // <- use this to have exactly elements_per_branch elements per branch
        var elems_left = 1+parseInt(Math.random()*elements_per_branch); // <- use this to have up to elements_per_branch elements per branch
        while (elems_left) { 
            var randVal = generate_random_val();
            if (depth_left == 0) {
                if (randVal.type == "array" || randVal.type == "object") {
                    continue;
                }
            }

            if (randVal.type == "array" || randVal.type == "object") {
                var newVal = generate_random_json(randVal.val, elements_per_branch, depth_left-1);
            }
            else {
                var newVal = randVal.val;
            }

            if (starting_element instanceof Array) {
                starting_element.push(newVal);
            }
            else if (typeof starting_element == "object") {
                var keyAlphabet = "abcdefghijklmnopqrstuvwxyz";
                var keyLen = 4 + parseInt(Math.random() * 8 + 1); // max key length between 4 and 12
                var newKey = '';
                for (var i = 0; i < keyLen; i++) {
                    newKey += keyAlphabet[parseInt(Math.random()*keyAlphabet.length)];
                }
                starting_element[newKey] = newVal;
            }

            elems_left--;
        }

        return starting_element;
    }

    function generate_random_val () {
        var possibilities = ["boolean", "number", "string", "array", "object"];
        var what = possibilities[parseInt(Math.random()*possibilities.length)];

        if (what == "boolean") {
            var x = parseInt(Math.random()*2);
            return { val : x == 0, type : "boolean" }
        }

        if (what == "number") {
            var genInteger = [true,false][parseInt(Math.random()*2)];
            var negative = [true,false][parseInt(Math.random()*2)];

            var maxNum = 2147483647; // MAX_INT 2^32-1
            var x = Math.random()*maxNum;
            
            if (genInteger) {
                x = parseInt(x);
            }
            if (negative) {
                x = -x;
            }

            return { val : x, type : "number" }
        }

        if (what == "string") {
            var len = 1 + parseInt(Math.random() * 20); // max string length between 1 and 20;

            // TODO here alphabet of string
            var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";

            var str = '';
            for (var i = 0 ; i < len; i++) {
                str += allChars[parseInt(Math.random()*allChars.length)];
            }
            return { val : str, type : "string" }
        }

        if (what == "array") {
            return { val : [], type : "array" }
        }

        if (what == "object") {
            return { val : {}, type: "object" }
        }
    }
});
