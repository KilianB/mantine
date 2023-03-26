import React from 'react';
import { em, MediaQuery, Text } from '@mantine/core';

const code = `
import { MediaQuery, Text } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${em(1200)}) and (min-width: ${em(800)})"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>(max-width: ${em(1200)}) and (min-width: ${em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MediaQuery, {
    query: `(max-width: ${em(1200)}) and (min-width: ${em(800)})`,
    styles: (theme2) => ({
      fontSize: theme2.fontSizes.lg,
      "&:hover": { backgroundColor: theme2.fn.primaryColor(), color: theme2.white }
    })
  }, /* @__PURE__ */ React.createElement(Text, null, "(max-width: ", em(1200), ") and (min-width: ", em(800), ") breakpoints"));
}
const theme = {
  type: "demo",
  component: Demo,
  code
};

export { theme };
//# sourceMappingURL=MediaQuery.demo.theme.js.map
