import React from 'react';
import { Group, Button } from '@mantine/core';
import { NavigationProgress, nprogress } from '@mantine/nprogress';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavigationProgress, null), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.increment(10),
    variant: "outline"
  }, "Add 10%"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.decrement(10),
    variant: "outline"
  }, "Decrease 10%"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.set(50),
    variant: "outline"
  }, "Set 50%"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.start(),
    variant: "outline"
  }, "Start"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.stop(),
    variant: "outline"
  }, "Stop"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.reset(),
    variant: "outline"
  }, "Reset"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => nprogress.complete(),
    variant: "outline"
  }, "Finish")));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=NProgress.demo.usage.js.map
