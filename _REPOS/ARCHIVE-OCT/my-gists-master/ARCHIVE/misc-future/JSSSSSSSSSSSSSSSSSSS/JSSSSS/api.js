/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
import assign from "./assign.mjs";
import defaultConverter from "./converter.mjs";

function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof top.document === "undefined") {
      return;
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    key = defaultConverter.write(key).replace(/=/g, "%3D");

    value = converter.write(String(value), key);

    let stringifiedAttributes = "";
    for (const attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }

      stringifiedAttributes += `; ${attributeName}`;

      if (attributes[attributeName] === true) {
        continue;
      }

      stringifiedAttributes += `=${attributes[attributeName].split(";")[0]}`;
    }

    return (top.document.cookie = `${key}=${value}${stringifiedAttributes}`);
  }

  function get(key) {
    if (typeof top.document === "undefined" || (arguments.length && !key)) {
      return;
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    const cookies = top.document.cookie ? top.document.cookie.split("; ") : [];
    const jar = {};
    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      const value = parts.slice(1).join("=");
      const foundKey = defaultConverter.read(parts[0]).replace(/%3D/g, "=");
      jar[foundKey] = converter.read(value, foundKey);

      if (key === foundKey) {
        break;
      }
    }

    return key ? jar[key] : jar;
  }

  return Object.create(
    {
      set,
      get,
      remove(key, attributes) {
        set(
          key,
          "",
          assign({}, attributes, {
            expires: -1,
          })
        );
      },
      withAttributes(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter(converter) {
        return init(assign({}, this.converter, converter), this.attributes);
      },
    },
    {
      attributes: {
        value: Object.freeze(defaultAttributes),
      },
      converter: {
        value: Object.freeze(converter),
      },
    }
  );
}
export default init(defaultConverter, {
  path: "/",
});
