import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { defaultItems } from './_Item.js';

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(SimpleGrid, {
    cols: 4,
    spacing: "lg",
    breakpoints: [
      { maxWidth: "md", cols: 3, spacing: "md" },
      { maxWidth: "sm", cols: 2, spacing: "sm" },
      { maxWidth: "xs", cols: 1, spacing: "sm" }
    ]
  }, defaultItems);
}
const themeBreakpoints = {
  type: "demo",
  component: Demo,
  code
};

export { themeBreakpoints };
//# sourceMappingURL=SimpleGrid.demo.themeBreakpoints.js.map
