$(function () {
    mkTool(
        'random-yaml',
        function () {
            var elementsPerBranch = parseInt($('#random-yaml-elements').val(), 10);
            var maxDepth = parseInt($('#random-yaml-depth').val(), 10);

            var generator = new RandomJsonGenerator({
                maxDepth : maxDepth,
                satisfyDepth : true, 
                elementsPerBranch : elementsPerBranch,
                possibleElements : ["booleans", "numbers", "strings", "arrays", "objects"],
                stringType : "random",
                maxStringLength : 10
            });

            var json = generator.generate();
            return YAML.stringify(json, maxDepth, 2);
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
