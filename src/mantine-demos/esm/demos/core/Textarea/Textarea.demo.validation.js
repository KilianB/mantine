import React from 'react';
import { Box, Textarea } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<Textarea error />

// Error as React node \u2013 red border color and message below input
<Textarea error="Comment should not include bad words" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Textarea, {
    label: "Your comment",
    placeholder: "Your comment",
    error: true
  }), /* @__PURE__ */ React.createElement(Textarea, {
    mt: "md",
    label: "Your comment",
    placeholder: "Your comment",
    error: "Comment should not include bad words"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=Textarea.demo.validation.js.map
