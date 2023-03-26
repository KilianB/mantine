import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { DropzoneDemoChildren } from './_base.js';

const code = `
import { useState } from 'react';
import { Group, Text, useMantineTheme, Button } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [active, setActive] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Group position="center">
        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>
          {active ? 'Disable' : 'Enable'} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
      >
        <Group position="center" spacing="xl" mih={220} sx={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: active ? "red" : "blue",
    onClick: () => setActive((d) => !d)
  }, active ? "Deactivate" : "Activate", " full screen dropzone")), /* @__PURE__ */ React.createElement(Dropzone.FullScreen, {
    active,
    accept: IMAGE_MIME_TYPE,
    onDrop: (files) => {
      console.log(files);
      setActive(false);
    }
  }, /* @__PURE__ */ React.createElement(DropzoneDemoChildren, null)));
}
const fullScreen = {
  type: "demo",
  component: Demo,
  code
};

export { fullScreen };
//# sourceMappingURL=Dropzone.demo.fullScreen.js.map
