import React from 'react';
import { Box, MantineProvider, TextInput, NumberInput, MultiSelect } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(MantineProvider, {
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
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "TextInput with custom layout",
    placeholder: "TextInput with custom layout",
    description: "Description below the input"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    mt: "xl",
    label: "NumberInput with custom layout",
    placeholder: "NumberInput with custom layout",
    description: "Description below the input"
  }), /* @__PURE__ */ React.createElement(MultiSelect, {
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

export { providerDefault };
//# sourceMappingURL=Input.demo.providerDefault.js.map
