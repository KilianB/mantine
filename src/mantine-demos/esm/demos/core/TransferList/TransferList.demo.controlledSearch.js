import React, { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { Wrapper } from './_wrapper.js';

const code = `
import { useState } from 'react'
import { TransferList, Stack, Text } from '@mantine/core';

function Demo() {
  const [search, setSearch] = useState(['', '']);

  return (
    <Stack>
      <Text>
        <Text component="span" weight="bold">Left search: </Text>
        {search[0] || '---'}
        {' / '}
        <Text component="span" weight="bold">Right search: </Text>
        {search[1] || '---'}
      </Text>

      <TransferList
        searchValues={search}
        onSearch={setSearch}
        {/* ...other props */}
      />
    </Stack>
  );
}
`;
function Demo() {
  const [search, setSearch] = useState(["", ""]);
  return /* @__PURE__ */ React.createElement(Stack, null, /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    weight: "bold"
  }, "Left search:", " "), search[0] || "---", " / ", /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    weight: "bold"
  }, "Right search:", " "), search[1] || "---"), /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    searchValues: search,
    onSearch: setSearch
  }));
}
const controlledSearch = {
  type: "demo",
  component: Demo,
  code
};

export { controlledSearch };
//# sourceMappingURL=TransferList.demo.controlledSearch.js.map
