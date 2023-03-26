'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      searchable
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      nothingFound="Nothing found"
    />
  );
}
`;
function Demo() {
  const [searchValue, onSearchChange] = React.useState("");
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 400,
    mx: "auto",
    data: _data.data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    searchable: true,
    searchValue,
    onSearchChange,
    nothingFound: "Nothing found"
  });
}
const searchableControlled = {
  type: "demo",
  code,
  component: Demo
};

exports.searchableControlled = searchableControlled;
//# sourceMappingURL=MultiSelect.demo.searchableControlled.js.map
