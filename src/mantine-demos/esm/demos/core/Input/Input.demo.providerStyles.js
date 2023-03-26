import React from 'react';
import { Box, MantineProvider, TextInput, NumberInput } from '@mantine/core';

const code = `
import { TextInput, NumberInput, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          InputWrapper: {
            styles: (theme) => ({
              label: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .1)',
              },
            }),
          },

          Input: {
            styles: (theme) => ({
              input: { borderColor: theme.colors.violet[theme.fn.primaryShade()] },
            }),
          },
        },
      }}
    >
      <TextInput
        label="TextInput with custom styles"
        placeholder="TextInput with custom styles"
        description="Description below the input"
      />
      <NumberInput
        mt="xl"
        label="NumberInput with custom styles"
        placeholder="NumberInput with custom styles"
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
          styles: (theme) => ({
            label: {
              backgroundColor: theme.colorScheme === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)"
            }
          })
        },
        Input: {
          styles: (theme) => ({
            input: { borderColor: theme.colors.violet[theme.fn.primaryShade()] }
          })
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "TextInput with custom styles",
    placeholder: "TextInput with custom styles",
    description: "Description below the input"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    mt: "xl",
    label: "NumberInput with custom styles",
    placeholder: "NumberInput with custom styles",
    description: "Description below the input"
  })));
}
const providerStyles = {
  type: "demo",
  component: Demo,
  code
};

export { providerStyles };
//# sourceMappingURL=Input.demo.providerStyles.js.map
