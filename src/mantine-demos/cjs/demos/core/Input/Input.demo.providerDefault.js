'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          InputWrapper: {
            defaultProps: {
              inputWrapperOrder: ['label', 'error', 'input', 'description'],
            },
          },

          Input: {
            defaultProps: {
              variant: 'filled',
            },
          },
        },
      }}
    >
      <TextInput
        label="TextInput with custom layout"
        placeholder="TextInput with custom layout"
        description="Description below the input"
      />
      <NumberInput
        mt="xl"
        label="NumberInput with custom layout"
        placeholder="NumberInput with custom layout"
        description="Description below the input"
      />
      <MultiSelect
        mt="xl"
        data={['Is not that', 'awesome?']}
        label="MultiSelect with custom layout"
        placeholder="MultiSelect with custom layout"
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      components: {
        InputWrapper: {
          defaultProps: {
            inputWrapperOrder: ["label", "error", "input", "description"]
          }
        },
        Input: {
          defaultProps: {
            variant: "filled"
          }
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "TextInput with custom layout",
    placeholder: "TextInput with custom layout",
    description: "Description below the input"
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    mt: "xl",
    label: "NumberInput with custom layout",
    placeholder: "NumberInput with custom layout",
    description: "Description below the input"
  }), /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    mt: "xl",
    data: ["Is not that", "awesome?"],
    label: "MultiSelect with custom layout",
    placeholder: "MultiSelect with custom layout",
    description: "Description below the input"
  })));
}
const providerDefault = {
  type: "demo",
  component: Demo,
  code
};

exports.providerDefault = providerDefault;
//# sourceMappingURL=Input.demo.providerDefault.js.map
