/*! dirtyjs 
 by @spencermountain
 2015-04-12 */
//append methods on array prototype
// dirty.js by @spencermountain 2015
(function() {

    //methods for the array prototype
    var arr = {

        //i always forget unshift, etc
        prepend : Array.prototype.unshift,

        //sort by frequency
        topk: function() {
            var the = this;
            var length = the.length || 1;
            var freq = {};
            var i = the.length - 1;
            while (i > -1) {
                if (freq[the[i]] == null) {
                    freq[the[i]] = 1;
                } else {
                    freq[the[i]]++;
                }
                i--;
            }
            var top = Object.keys(freq).sort(function(a, b) {
                return freq[b] - freq[a];
            });
            return top.map(function(v) {
                return {
                    value: v,
                    count: freq[v]
                };
            });
        },
        //topk with percentages instead of counts
        topkp: function() {
            var the = this
            var l = the.length
            the = the.topk();
            return the.map(function(o) {
                o.percentage = o.count / l
                return o
            })
        },

        //like map, with a string
        pluck: function(str) {
            return this.map(function(o) {
                return o[str]
            })
        },
        //clone
        grab: function(str) {
            return this.pluck(str)
        },

        //grab both yes/no results
        spigot: function(fn) {
            var all = {
                "true": [],
                "false": []
            };
            this.forEach(function(v) {
                if (fn(v)) {
                    return all["true"].push(v);
                } else {
                    return all["false"].push(v);
                }
            });
            return all;
        },
        //clone
        moses: function(fn) {
            return this.spigtot(fn)
        },

        //return only the double/triples...
        duplicates: function(field) {
            var the = this;
            if (field) {
                the = the.grab(field);
            }
            the = the.sort();
            var results = [];
            var i = 0;
            while (i < the.length - 1) {
                if (the[i + 1] === the[i]) {
                    results.push(the[i]);
                }
                i++;
            }
            return results;
        },
        //clone
        dupes: function(field) {
            return this.duplicates(field)
        },

        //union of two arrays
        overlap: function(arr2) {
            return this.filter(function(v) {
                return arr2.some(function(v2) {
                    return v === v2;
                });
            });
        },

        //remove duplicates, with optional property
        unique: function(f) {
            var o = {},
                i, l = this.length,
                result = [];
            if (f !== undefined) {
                for (i = 0; i < l; i += 1) {
                    if (o[this[i][f]] === undefined) {
                        result.push(this[i])
                    }
                    o[this[i][f]] = true;
                }
                return result
            } else {
                for (i = 0; i < l; i += 1) {
                    o[this[i]] = this[i]
                }
                var keys = Object.keys(o)
                l = keys.length
                for (i = 0; i < l; i += 1) {
                    result.push(o[keys[i]])
                }
                return result;
            }
        },
        //clone
        uniq: function(f) {
            return this.unique(f)
        },
        //clone
        uniq_by: function(f) {
            return this.unique(f)
        },

        //choose a random element
        random: function() {
            var arr = this;
            return arr[Math.floor(Math.random() * arr.length)];
        },

        //does array have this element
        has: function(a) {
            return this.some(function(a2) {
                return a === a2
            });
        },
        //clone
        includes: function(f) {
            return this.has(f);
        },

        //return a number
        sum: function(field) {
            if (field) {
                return this.reduce(function(a, b) {
                    return a + b[field];
                }, 0);
            }
            return this.reduce((function(a, b) {
                return a + b;
            }), 0);
        },

        average: function(field) {
            return this.sum(field) / this.length
        },

        //make array of arrays into one array
        flatten: function() {
            var the=this
            return [].concat.apply([], the)
        },

        //randomize
        shuffle: function() {
            var array = this
            var m = array.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        },
        //clone
        randomize: function() {
            return this.shuffle()
        },

        //remove all null, undefineds
        compact: function() {
            return this.filter(function(a){
                return a!==undefined && a!==null
            })
        }

    }

    //append array methods
    Object.keys(arr).forEach(function(i) {
        return Object.defineProperty(Array.prototype, i, {
            value: arr[i],
            configurable: true,
            enumerable: false
        });
    });

})()

// console.log(JSON.stringify([1,2,2,3].shuffle()))
