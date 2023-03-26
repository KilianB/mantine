'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dropzone = require('@mantine/dropzone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text, rem } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      onDrop={() => {}}
      accept={IMAGE_MIME_TYPE}
      sx={(theme) => ({
        minHeight: rem(120),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

        '&[data-accept]': {
          color: theme.white,
          backgroundColor: theme.colors.blue[6],
        },

        '&[data-reject]': {
          color: theme.white,
          backgroundColor: theme.colors.red[6],
        },
      })}
    >
      <Text align="center">Drop images here</Text>
    </Dropzone>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dropzone.Dropzone, {
    onDrop: () => {
    },
    accept: dropzone.IMAGE_MIME_TYPE,
    sx: (theme) => ({
      minHeight: core.rem(120),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 0,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      "&[data-accept]": {
        color: theme.white,
        backgroundColor: theme.colors.blue[6]
      },
      "&[data-reject]": {
        color: theme.white,
        backgroundColor: theme.colors.red[6]
      }
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Drop images here"));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Dropzone.demo.stylesApi.js.map
