'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: {
          defaultProps: (theme) => ({
            color: theme.colorScheme === "dark" ? "orange" : "cyan"
          })
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Demo button"));
}
const defaultPropsTheme = {
  type: "demo",
  component: Demo,
  code
};

exports.defaultPropsTheme = defaultPropsTheme;
//# sourceMappingURL=Theme.demo.defaultPropsTheme.js.map
