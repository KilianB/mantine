'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var nprogress = require('@mantine/nprogress');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group position="center">
        <Button onClick={() => nprogress.increment(10)}>Add 10%</Button>
        <Button color="red" onClick={() => nprogress.decrement(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Finish</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(nprogress.NavigationProgress, null), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.increment(10),
    variant: "outline"
  }, "Add 10%"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.decrement(10),
    variant: "outline"
  }, "Decrease 10%"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.set(50),
    variant: "outline"
  }, "Set 50%"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.start(),
    variant: "outline"
  }, "Start"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.stop(),
    variant: "outline"
  }, "Stop"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.reset(),
    variant: "outline"
  }, "Reset"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => nprogress.nprogress.complete(),
    variant: "outline"
  }, "Finish")));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=NProgress.demo.usage.js.map
