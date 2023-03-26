import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Highlight, {
    highlight: ["this", "that"],
    sx: (theme) => ({
      '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
      '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] }
    })
  }, "Highlight this, that, also this and also that");
}
const data = {
  type: "demo",
  code,
  component: Demo
};

export { data };
//# sourceMappingURL=Highlight.demo.data.js.map
