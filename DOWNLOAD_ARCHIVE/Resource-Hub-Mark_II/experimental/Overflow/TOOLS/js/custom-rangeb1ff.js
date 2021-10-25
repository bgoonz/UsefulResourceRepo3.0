function parseRange(range) {
    var clearedItems = [];
    if (range.length == 0) {
        return {
            numbers: clearedItems,
            success: true
        }
    }

    var items = range.split(",");
    for (var i = 0; i < items.length; i++) {
        var clearedItem = items[i].trim();

        if (/[^\d -]/.test(clearedItem)) {
            return {
                success : false,
                error   : 'Range contains non-numeric values.'
            }
        }

        if (!/^\d+$/.test(clearedItem) && !/^\d+ *- *\d+$/.test(clearedItem)) {
            return {
                success : false,
                error   : 'Range numbers must be comma or dash separated.'
            }
        }

        if (/^\d+ *- *\d+$/.test(clearedItem)) {
            var parts = clearedItem.split('-');
            var start = parseInt(parts[0].trim());
            var end   = parseInt(parts[1].trim());

            if (start > end) {
                return {
                    success : false,
                    error   : 'End element {1} is bigger than beginning element {0} in range {0}-{1}.'.format(start, end)
                }
            }

            for (var j = start; j <= end; j++) {
                clearedItems.push(j);
            }
        }
        else {
            clearedItems.push(parseInt(clearedItem));
        }
    }
    return {
        numbers : clearedItems,
        success : true
    }
}