import React from 'react';
import { rem, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

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
  return /* @__PURE__ */ React.createElement(Dropzone, {
    onDrop: () => {
    },
    accept: IMAGE_MIME_TYPE,
    sx: (theme) => ({
      minHeight: rem(120),
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
  }, /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Drop images here"));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=Dropzone.demo.stylesApi.js.map
