'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <ScrollArea
        w={300}
        h={200}
        type="always"
        offsetScrollbars
        styles={(theme) => ({
          scrollbar: {
            '&, &:hover': {
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },

            '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
              backgroundColor: theme.colors.red[6],
            },

            '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb': {
              backgroundColor: theme.colors.blue[6],
            },
          },

          corner: {
            opacity: 1,
            background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Box w={600}>
          {/* ...content */}
        </Box>
      </ScrollArea>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, {
    w: 300,
    h: 200,
    type: "always",
    offsetScrollbars: true,
    styles: (theme) => ({
      scrollbar: {
        "&, &:hover": {
          background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        },
        '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
          backgroundColor: theme.colors.red[6]
        },
        '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb': {
          backgroundColor: theme.colors.blue[6]
        }
      },
      corner: {
        opacity: 1,
        background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      }
    })
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 600
  }, /* @__PURE__ */ React__default.createElement(_content.Content, null))));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=ScrollArea.demo.stylesApi.js.map
