'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ButtonDefaultProps = {
  size: "xs",
  color: "cyan"
};
const SwitchDefaultProps = {
  size: "xs",
  onLabel: "ON",
  offLabel: "OFF"
};
const code = `
import { MantineProvider, Group, Button, Switch } from '@mantine/core';

function Demo() {
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Button: {
              defaultProps: {
                size: 'xs',
                color: 'cyan',
              },
            },

            Switch: {
              defaultProps: {
                size: 'xs',
                onLabel: 'ON',
                offLabel: 'OFF',
              },
            },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: { defaultProps: ButtonDefaultProps },
        Switch: { defaultProps: SwitchDefaultProps }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Within provider"), /* @__PURE__ */ React__default.createElement(core.Switch, {
    label: "Within provider"
  }))), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Outside of provider"), /* @__PURE__ */ React__default.createElement(core.Switch, {
    label: "Outside of provider"
  })));
}
const defaultProps = {
  type: "demo",
  component: Demo,
  code
};

exports.defaultProps = defaultProps;
//# sourceMappingURL=Theme.demo.defaultProps.js.map
