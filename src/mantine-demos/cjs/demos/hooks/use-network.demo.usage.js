'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text, Table } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';

function Demo() {
  const networkStatus = useNetwork();

  return (
    <Table maw={300} sx={{ tableLayout: 'fixed' }} mx="auto">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Online</td>
          <td>
            <Text size="sm" color={networkStatus.online ? 'teal' : 'red'}>
              {networkStatus.online ? 'Online' : 'Offline'}
            </Text>
          </td>
        </tr>

        <tr>
          <td>rtt</td>
          <td>{networkStatus.rtt}</td>
        </tr>

        <tr>
          <td>downlink</td>
          <td>{networkStatus.downlink}</td>
        </tr>

        <tr>
          <td>effectiveType</td>
          <td>{networkStatus.effectiveType}</td>
        </tr>

        <tr>
          <td>saveData</td>
          <td>
            <Text size="sm" color={networkStatus.saveData ? 'teal' : 'red'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
`;
function Demo() {
  const networkStatus = hooks.useNetwork();
  return /* @__PURE__ */ React__default.createElement(core.Table, {
    maw: 300,
    sx: { tableLayout: "fixed" },
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement("thead", null, /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("th", null, "Property"), /* @__PURE__ */ React__default.createElement("th", null, "Value"))), /* @__PURE__ */ React__default.createElement("tbody", null, /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("td", null, "Online"), /* @__PURE__ */ React__default.createElement("td", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    color: networkStatus.online ? "teal" : "red"
  }, networkStatus.online ? "Online" : "Offline"))), /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("td", null, "rtt"), /* @__PURE__ */ React__default.createElement("td", null, networkStatus.rtt)), /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("td", null, "downlink"), /* @__PURE__ */ React__default.createElement("td", null, networkStatus.downlink)), /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("td", null, "effectiveType"), /* @__PURE__ */ React__default.createElement("td", null, networkStatus.effectiveType)), /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("td", null, "saveData"), /* @__PURE__ */ React__default.createElement("td", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    color: networkStatus.saveData ? "teal" : "red"
  }, networkStatus.saveData ? "true" : "false")))));
}
const useNetworkDemo = {
  type: "demo",
  component: Demo,
  code
};

exports.useNetworkDemo = useNetworkDemo;
//# sourceMappingURL=use-network.demo.usage.js.map
