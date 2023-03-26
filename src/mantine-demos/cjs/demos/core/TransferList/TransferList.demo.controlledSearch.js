'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [search, setSearch] = React.useState(["", ""]);
  return /* @__PURE__ */ React__default.createElement(core.Stack, null, /* @__PURE__ */ React__default.createElement(core.Text, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    component: "span",
    weight: "bold"
  }, "Left search:", " "), search[0] || "---", " / ", /* @__PURE__ */ React__default.createElement(core.Text, {
    component: "span",
    weight: "bold"
  }, "Right search:", " "), search[1] || "---"), /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
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

exports.controlledSearch = controlledSearch;
//# sourceMappingURL=TransferList.demo.controlledSearch.js.map
