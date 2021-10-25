$(function () {
    mkImageConvertTool(
        'gif-to-jpg', 
        {
            inputMime : 'image/gif',
            inputHumanFormat : 'GIF'
        },
        {
            outputMime : 'image/jpeg',
            outputExt : 'jpg'
        },
        function () {
            
        }
    );
});
