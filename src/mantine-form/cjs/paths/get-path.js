'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getSplittedPath = require('./get-splitted-path.js');

function getPath(path, values) {
  const splittedPath = getSplittedPath.getSplittedPath(path);
  if (splittedPath.length === 0 || typeof values !== "object" || values === null) {
    return void 0;
  }
  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === void 0) {
      break;
    }
    value = value[splittedPath[i]];
  }
  return value;
}

exports.getPath = getPath;
//# sourceMappingURL=get-path.js.map
