'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center, SegmentedControl, Box } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye size="1rem" />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode size="1rem" />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink size="1rem" />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.SegmentedControl, {
    data: [
      {
        value: "preview",
        label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconEye, {
          size: "1rem"
        }), /* @__PURE__ */ React__default.createElement(core.Box, {
          ml: 10
        }, "Preview"))
      },
      {
        value: "code",
        label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconCode, {
          size: "1rem"
        }), /* @__PURE__ */ React__default.createElement(core.Box, {
          ml: 10
        }, "Code"))
      },
      {
        value: "export",
        label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, {
          size: "1rem"
        }), /* @__PURE__ */ React__default.createElement(core.Box, {
          ml: 10
        }, "Export"))
      }
    ]
  }));
}
const labels = {
  type: "demo",
  component: Demo,
  code
};

exports.labels = labels;
//# sourceMappingURL=SegmentedControl.demo.labels.js.map
