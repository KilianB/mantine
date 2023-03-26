import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;
function Demo() {
  const [title, setTitle] = useState("");
  useDocumentTitle(title);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setTitle(randomId())
  }, "Set document title to random id"));
}
const useDocumentTitleDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useDocumentTitleDemo };
//# sourceMappingURL=use-document-title.demo.usage.js.map
