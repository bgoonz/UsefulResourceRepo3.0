/*Call `methodName` on each item of the array passing custom arguments if
 * needed.
 */
function invoke(arr, methodName, var_args) {
    if (arr == null) {
        return arr;
    }

    let args = slice(arguments, 2);
    let i = -1,
        len = arr.length,
        value;
    while (++i < len) {
        value = arr[i];
        value[methodName].apply(value, args);
    }

    return arr;
}

return invoke;
