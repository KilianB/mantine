'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const setScrollParam = ({ axis, parent, distance }) => {
  if (!parent && typeof document === "undefined") {
    return;
  }
  const method = axis === "y" ? "scrollTop" : "scrollLeft";
  if (parent) {
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;
    body[method] = distance;
    documentElement[method] = distance;
  }
};

exports.setScrollParam = setScrollParam;
//# sourceMappingURL=set-scroll-param.js.map
