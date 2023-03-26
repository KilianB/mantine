import React from 'react';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';
import { Group, SegmentedControl, Center, Box } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(SegmentedControl, {
    data: [
      {
        value: "preview",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconEye, {
          size: "1rem"
        }), /* @__PURE__ */ React.createElement(Box, {
          ml: 10
        }, "Preview"))
      },
      {
        value: "code",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconCode, {
          size: "1rem"
        }), /* @__PURE__ */ React.createElement(Box, {
          ml: 10
        }, "Code"))
      },
      {
        value: "export",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconExternalLink, {
          size: "1rem"
        }), /* @__PURE__ */ React.createElement(Box, {
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

export { labels };
//# sourceMappingURL=SegmentedControl.demo.labels.js.map
