import React, { useState } from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => \`\${value}@\${provider}\`)
      : [];

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      label="Email"
      placeholder="Start typing to see options"
      data={data}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState("");
  const data = value.trim().length > 0 && !value.includes("@") ? ["gmail.com", "outlook.com", "yahoo.com"].map((provider) => `${value}@${provider}`) : [];
  return /* @__PURE__ */ React.createElement(Autocomplete, {
    maw: 320,
    mx: "auto",
    value,
    onChange: setValue,
    label: "Email",
    placeholder: "Start typing to see options",
    data
  });
}
const dynamic = {
  type: "demo",
  code,
  component: Demo
};

export { dynamic };
//# sourceMappingURL=Autocomplete.demo.dynamic.js.map
