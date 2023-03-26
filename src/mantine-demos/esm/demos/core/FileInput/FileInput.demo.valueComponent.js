import React from 'react';
import { Box, FileInput, Group, Center, rem } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const code = `
import { FileInput, FileInputProps, Group, Center, rem } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Value({ file }: { file: File }) {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: \`\${rem(3)} \${rem(7)}\`,
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={rem(14)} style={{ marginRight: rem(5) }} />
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: rem(200),
          display: 'inline-block',
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <FileInput label="Multiple" placeholder="Multiple" multiple valueComponent={ValueComponent} />
      <FileInput mt="md" label="Single" placeholder="Single" valueComponent={ValueComponent} />
    </Box>
  );
}
`;
function Value({ file }) {
  return /* @__PURE__ */ React.createElement(Center, {
    inline: true,
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
      fontSize: theme.fontSizes.xs,
      padding: `${rem(3)} ${rem(7)}`,
      borderRadius: theme.radius.sm
    })
  }, /* @__PURE__ */ React.createElement(IconPhoto, {
    size: rem(14),
    style: { marginRight: rem(5) }
  }), /* @__PURE__ */ React.createElement("span", {
    style: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      maxWidth: rem(200),
      display: "inline-block"
    }
  }, file.name));
}
const ValueComponent = ({ value }) => {
  if (Array.isArray(value)) {
    return /* @__PURE__ */ React.createElement(Group, {
      spacing: "sm",
      py: "xs"
    }, value.map((file, index) => /* @__PURE__ */ React.createElement(Value, {
      file,
      key: index
    })));
  }
  return /* @__PURE__ */ React.createElement(Value, {
    file: value
  });
};
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(FileInput, {
    label: "Multiple",
    placeholder: "Multiple",
    multiple: true,
    valueComponent: ValueComponent
  }), /* @__PURE__ */ React.createElement(FileInput, {
    mt: "md",
    label: "Single",
    placeholder: "Single",
    valueComponent: ValueComponent
  }));
}
const valueComponent = {
  type: "demo",
  code,
  component: Demo
};

export { valueComponent };
//# sourceMappingURL=FileInput.demo.valueComponent.js.map
