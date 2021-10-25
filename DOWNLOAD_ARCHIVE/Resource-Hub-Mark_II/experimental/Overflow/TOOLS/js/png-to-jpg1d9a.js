$(function () {
    mkImageConvertTool(
        'png-to-jpg', 
        {
            inputMime : 'image/png',
            inputHumanFormat : 'PNG'
        },
        {
            outputMime : 'image/jpeg',
            outputExt : 'jpg'
        },
        function () {
            
        }
    );
});
