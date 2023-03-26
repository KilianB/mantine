'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Button
  sx={(theme) => ({
    borderColor: theme.colors.blue[9],

    '&:not([data-disabled]):hover': {
      backgroundColor: theme.colors.blue[9],
    },
  })}
>
  Button with sx styles
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    sx: (theme) => ({
      borderColor: theme.colors.blue[9],
      "&:not([data-disabled]):hover": {
        backgroundColor: theme.colors.blue[9]
      }
    })
  }, "Button with sx styles"));
}
const createStylesSx = {
  type: "demo",
  component: Demo,
  code
};

exports.createStylesSx = createStylesSx;
//# sourceMappingURL=CreateStyles.demo.sx.js.map
