import React from 'react';
import { em, Group, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;
function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: matches ? "teal" : "red",
    variant: "filled"
  }, "Breakpoint ", matches ? "matches" : "does not match"));
}
const useMediaQueryDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useMediaQueryDemo };
//# sourceMappingURL=use-media-query.demo.usage.js.map
