import React from 'react';
import { Group, ScrollArea, Box } from '@mantine/core';
import { Content } from './_content.js';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ScrollArea, {
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
  }, /* @__PURE__ */ React.createElement(Box, {
    w: 600
  }, /* @__PURE__ */ React.createElement(Content, null))));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=ScrollArea.demo.stylesApi.js.map
