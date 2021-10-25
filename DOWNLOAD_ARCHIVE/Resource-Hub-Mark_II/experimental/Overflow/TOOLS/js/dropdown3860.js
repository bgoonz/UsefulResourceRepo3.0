function Dropdown (opts) {
    if (!(this instanceof Dropdown)) return new Dropdown(opts);
    var self = this;

    var dropdown;
    var selected;
    var slider;

    function appendItem (x) {
        var item = $('<div class="item">');
        item.on('click', function () {
            // update selection
            if (x.icon) {
                selected.find('.icon img').attr('src', x.icon);
            }
            if (typeof x === "object") {
                selected.find('.text').text(x.text);
            }
            else if (typeof x === "number" || typeof x === "string") {
                selected.find('.text').text(x);
            }
            if (opts.callback) {
                opts.callback(selected.find('.text').text());
            }
            selected.click();
        });
        item.css({
            width : opts.width, 
            height : opts.height
        });

        if (x.icon) {
            var icon = $('<div class="icon">');
            var img = $('<img src="' + x.icon + '">');
            if (opts.iconWidth) img.width(opts.iconWidth);
            if (opts.iconHeight) img.height(opts.iconHeight);
            icon.append(img);
        }

        var text = $('<div class="text">');
        if (typeof x === "object") {
            text.append(x.text);
        }
        else if (typeof x === "number" || typeof x === "string") {
            text.append(x);
        }

        if (x.center || opts.center) {
            text.css({
                left : opts.width / 2 - 20
            });
        }

        if (x.icon) {
            item.append(icon);
        }

        item.append(text);
        slider.append(item);

        if (x.selected) {
            selected.append(item.clone());
        }
    }

    function appendAllItems (data) {
        // if none of items are selected, select first
        var oneSelected = false;
        data.forEach(function (x) {
            if (x.selected) oneSelected = true;
        });

        if (!oneSelected) {
            if (data.length) {
                if (typeof data[0] === "object") {
                    data[0] = {
                        text : data[0].text,
                        icon : data[0].icon,
                        selected : true
                    };
                }
                else {
                    data[0] = { text : data[0], selected : true };
                }
            }
        }

        data.forEach(function (x) {
            appendItem(x);
        });
    }

    self.update = function (data) {
        dropdown.find('.item').remove();
        appendAllItems(data);
    }

    self.create = function () {
        var data = opts.data;

        dropdown = $('<div class="dropdown">');
        var arrow = $('<div class="dropdown-arrow">');
        arrow.append('<img src="/images/dropdown-arrow-down.png">');
        arrow.css({
            top : opts.height/2 - 8,
            left : opts.width - 20,
        });
        dropdown.append(arrow);

        if (opts.backgroundColor) {
            dropdown.css({ 'background-color' : opts.backgroundColor });
        }

        selected = $('<div class="dropdown-selected">');
        dropdown.append(selected);

        slider = $('<div class="dropdown-slider">');
        dropdown.append(slider);

        appendAllItems(data);

        // make dropdown selectable
        selected.on('click', function () {
            if (slider.is(':visible')) {
                if (opts.onClick) opts.onClick('hidden');
                slider.slideUp('fast');
                dropdown.find('.dropdown-arrow img').attr(
                    'src', '/images/dropdown-arrow-down.png'
                );
            }
            else {
                if (opts.onClick) opts.onClick('visible');
                slider.slideDown('fast');
                dropdown.find('.dropdown-arrow img').attr(
                    'src', '/images/dropdown-arrow-up.png'
                );
            }
        });
        arrow.on('click', function () {
            selected.click()
        });

        return dropdown;
    }
}
