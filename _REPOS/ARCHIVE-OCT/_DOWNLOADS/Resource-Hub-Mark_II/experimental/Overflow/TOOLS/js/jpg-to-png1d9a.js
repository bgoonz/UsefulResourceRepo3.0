$(function () {
    mkImageConvertTool(
        'jpg-to-png', 
        {
            inputMime : 'image/jpeg',
            inputHumanFormat : 'JPEG'
        },
        {
            outputMime : 'image/png',
            outputExt : 'png'
        },
        function () {
            
        }
    );
});
