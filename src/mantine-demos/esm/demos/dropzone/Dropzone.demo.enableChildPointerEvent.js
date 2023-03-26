import React, { useRef } from 'react';
import { Group, Button } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center">
          <Button onClick={() => openRef.current()}>Select files</Button>
        </Group>
      </Dropzone>
    </>
  );
}

`;
function Demo() {
  const openRef = useRef(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Dropzone, {
    openRef,
    onDrop: () => {
    },
    activateOnClick: false,
    styles: { inner: { pointerEvents: "all" } }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => openRef.current()
  }, "Select files"))));
}
const enableChildPointerEvent = {
  type: "demo",
  component: Demo,
  code
};

export { enableChildPointerEvent };
//# sourceMappingURL=Dropzone.demo.enableChildPointerEvent.js.map
