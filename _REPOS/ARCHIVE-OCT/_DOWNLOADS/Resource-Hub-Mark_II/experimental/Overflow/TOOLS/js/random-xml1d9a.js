$(function () {
    mkTool(
        'random-xml',
        function () {
            var elementsPerBranch = parseInt($('#random-xml-elements').val(), 10);
            var maxDepth = parseInt($('#random-xml-depth').val(), 10);

            if (maxDepth == 0) {
                throw new Error("Depth of zero can only generate the root element <root/>.")
            }

            var generator = new RandomJsonGenerator({
                maxDepth : maxDepth,
                satisfyDepth : true,
                elementsPerBranch : elementsPerBranch,
                stringType : "random",
                possibleElements : ["strings", "numbers", "objects"],
                randomKeyAlphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-abcdefghijklmnopqrstuvwxyz",
                randomKeyRestrictions: ["alpha-or-underscore-first", "length-one-plus"],
                maxStringLength : 10
            });

            var json = generator.generate();
            var xml = json2xml(json);
            xml = "<root>" + xml + "</root>";
            return vkbeautify.xml(xml, "  ");
        },
        {
            allowEmptyText : true,
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
