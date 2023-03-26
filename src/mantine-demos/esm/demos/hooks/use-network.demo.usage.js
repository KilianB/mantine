import React from 'react';
import { Table, Text } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';

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
  const networkStatus = useNetwork();
  return /* @__PURE__ */ React.createElement(Table, {
    maw: 300,
    sx: { tableLayout: "fixed" },
    mx: "auto"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Property"), /* @__PURE__ */ React.createElement("th", null, "Value"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Online"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    color: networkStatus.online ? "teal" : "red"
  }, networkStatus.online ? "Online" : "Offline"))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "rtt"), /* @__PURE__ */ React.createElement("td", null, networkStatus.rtt)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "downlink"), /* @__PURE__ */ React.createElement("td", null, networkStatus.downlink)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "effectiveType"), /* @__PURE__ */ React.createElement("td", null, networkStatus.effectiveType)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "saveData"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    color: networkStatus.saveData ? "teal" : "red"
  }, networkStatus.saveData ? "true" : "false")))));
}
const useNetworkDemo = {
  type: "demo",
  component: Demo,
  code
};

export { useNetworkDemo };
//# sourceMappingURL=use-network.demo.usage.js.map
