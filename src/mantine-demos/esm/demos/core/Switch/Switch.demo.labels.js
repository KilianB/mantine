import React from 'react';
import { Group, Switch } from '@mantine/core';

const code = `
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch onLabel="ON" offLabel="OFF" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Switch, {
    size: "xs",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React.createElement(Switch, {
    size: "sm",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React.createElement(Switch, {
    size: "md",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React.createElement(Switch, {
    size: "lg",
    onLabel: "ON",
    offLabel: "OFF"
  }), /* @__PURE__ */ React.createElement(Switch, {
    size: "xl",
    onLabel: "ON",
    offLabel: "OFF"
  }));
}
const labels = {
  type: "demo",
  component: Demo,
  code
};

export { labels };
//# sourceMappingURL=Switch.demo.labels.js.map
