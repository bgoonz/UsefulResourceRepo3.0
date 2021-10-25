window.bridges["generate-empty-file"] = function(){
    var bridge = function() {
        return "<empty>";
    }

    function downloader() {
        var tool = this;
        var options = tool.options.get();
        var fileExtension = options["file-extension"];

        var data = new Blob([], { type : "text/plain" });
        saveAs(data, "output-" + tool.siteName + fileExtension.toString());
    }

    return {
        converter: bridge,
        config: {
            type: "text",
            override: {
                "output.download" : downloader
            }
        }
    }

}
