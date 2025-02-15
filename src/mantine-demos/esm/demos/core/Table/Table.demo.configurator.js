import React from 'react';
import { Table } from '@mantine/core';
import { elements } from './_data.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Table, __spreadValues({}, props), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Element position"), /* @__PURE__ */ React.createElement("th", null, "Element name"), /* @__PURE__ */ React.createElement("th", null, "Symbol"), /* @__PURE__ */ React.createElement("th", null, "Atomic mass"))), /* @__PURE__ */ React.createElement("tbody", null, elements.map((element) => /* @__PURE__ */ React.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React.createElement("td", null, element.position), /* @__PURE__ */ React.createElement("td", null, element.name), /* @__PURE__ */ React.createElement("td", null, element.symbol), /* @__PURE__ */ React.createElement("td", null, element.mass)))));
}
const codeTemplate = (props) => `
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table${props}>
      {/* {...rows} */}
    </Table>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "striped", type: "boolean", defaultValue: false },
    { name: "highlightOnHover", type: "boolean", defaultValue: false },
    { name: "withBorder", type: "boolean", defaultValue: false },
    { name: "withColumnBorders", type: "boolean", defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Table.demo.configurator.js.map
