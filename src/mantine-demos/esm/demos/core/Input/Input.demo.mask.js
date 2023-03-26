import React from 'react';
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

const code = `
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
      <Input<any>
        component={IMaskInput}
        mask="+7 (000) 000-00-00"
        id={id}
        placeholder="Your phone"
      />
    </Input.Wrapper>
  );
}
`;
function Demo() {
  const id = useId();
  return /* @__PURE__ */ React.createElement(Input.Wrapper, {
    id,
    label: "Your phone",
    required: true,
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Input, {
    component: IMaskInput,
    mask: "+7 (000) 000-00-00",
    id,
    placeholder: "Your phone"
  }));
}
const mask = {
  type: "demo",
  component: Demo,
  code
};

export { mask };
//# sourceMappingURL=Input.demo.mask.js.map
