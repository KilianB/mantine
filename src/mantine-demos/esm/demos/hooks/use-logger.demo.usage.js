import React, { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;
function Demo() {
  const [count, setCount] = useState(0);
  useLogger("Demo", [{ count, hello: "world" }]);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setCount((c) => c + 1)
  }, "Update state (", count, ")"));
}
const useLoggerDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useLoggerDemo };
//# sourceMappingURL=use-logger.demo.usage.js.map
