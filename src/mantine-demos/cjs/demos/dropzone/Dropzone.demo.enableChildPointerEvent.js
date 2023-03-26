'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dropzone = require('@mantine/dropzone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const openRef = React.useRef(null);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(dropzone.Dropzone, {
    openRef,
    onDrop: () => {
    },
    activateOnClick: false,
    styles: { inner: { pointerEvents: "all" } }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => openRef.current()
  }, "Select files"))));
}
const enableChildPointerEvent = {
  type: "demo",
  component: Demo,
  code
};

exports.enableChildPointerEvent = enableChildPointerEvent;
//# sourceMappingURL=Dropzone.demo.enableChildPointerEvent.js.map
