/** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */
import { errorObject } from "./errorObject";
var tryCatchTarget;
function tryCatcher() {
  errorObject.e = undefined;
  try {
    return tryCatchTarget.apply(this, arguments);
  } catch (e) {
    errorObject.e = e;
    return errorObject;
  } finally {
    tryCatchTarget = undefined;
  }
}
export function tryCatch(fn) {
  tryCatchTarget = fn;
  return tryCatcher;
}
//# sourceMappingURL=tryCatch.js.map
