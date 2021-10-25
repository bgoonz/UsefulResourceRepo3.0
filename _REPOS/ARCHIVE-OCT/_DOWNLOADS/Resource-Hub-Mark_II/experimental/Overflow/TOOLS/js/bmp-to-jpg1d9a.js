$(function () {
    mkImageConvertTool(
        'bmp-to-jpg', 
        {
            inputMime : 'image/bmp',
            inputHumanFormat : 'BMP'
        },
        {
            outputMime : 'image/jpeg',
            outputExt : 'jpg'
        },
        function () {
            
        }
    );
});
