import React from 'react';
import { IconPlus } from '@tabler/icons-react';
import { Box } from '@mantine/core';
import { BaseDemo } from './_base.js';

const code = `
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

function Demo() {
  return (
    <Accordion
      chevron={<IconPlus size="1rem" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    >
      {/* ... content */}
    </Accordion>
  );
}
`;
function IconReplaceDemo() {
  return /* @__PURE__ */ React.createElement(BaseDemo, {
    chevron: /* @__PURE__ */ React.createElement(IconPlus, {
      size: "1rem"
    }),
    styles: {
      chevron: {
        "&[data-rotate]": {
          transform: "rotate(45deg)"
        }
      }
    }
  });
}
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 380,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(IconReplaceDemo, null));
}
const chevron = {
  type: "demo",
  component: Demo,
  code
};

export { IconReplaceDemo, chevron };
//# sourceMappingURL=Accordion.demo.chevron.js.map
