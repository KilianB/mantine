import React from 'react';
import { em, MediaQuery, rem, Text } from '@mantine/core';

const code = `
import { MediaQuery, Text, rem } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${em(1200)}) and (min-width: ${em(800)})"
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: ${em(1200)}) and (min-width: ${em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MediaQuery, {
    query: `(max-width: ${em(1200)}) and (min-width: ${em(800)})`,
    styles: { fontSize: rem(20), "&:hover": { backgroundColor: "silver" } }
  }, /* @__PURE__ */ React.createElement(Text, null, "(max-width: ", em(1200), ") and (min-width: ", em(800), ") breakpoints"));
}
const query = {
  type: "demo",
  component: Demo,
  code
};

export { query };
//# sourceMappingURL=MediaQuery.demo.query.js.map
