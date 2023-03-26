'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      onSearchChange={onSearchChange}
      searchValue={searchValue}
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;
function Demo() {
  const [searchValue, onSearchChange] = React.useState("");
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 320,
    mx: "auto",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    searchable: true,
    onSearchChange,
    searchValue,
    nothingFound: "No options",
    data: ["React", "Angular", "Svelte", "Vue"],
    withinPortal: true
  });
}
const searchableControlled = {
  type: "demo",
  code,
  component: Demo
};

exports.searchableControlled = searchableControlled;
//# sourceMappingURL=Select.demo.searchableControlled.js.map
