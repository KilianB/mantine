'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dropzone = require('@mantine/dropzone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function Demo() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text align="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        {previews}
      </SimpleGrid>
    </div>
  );
}
`;
function Demo() {
  const [files, setFiles] = React.useState([]);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return /* @__PURE__ */ React__default.createElement(core.Image, {
      key: index,
      src: imageUrl,
      imageProps: { onLoad: () => URL.revokeObjectURL(imageUrl) }
    });
  });
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(dropzone.Dropzone, {
    accept: dropzone.IMAGE_MIME_TYPE,
    onDrop: setFiles
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Drop images here")), /* @__PURE__ */ React__default.createElement(core.SimpleGrid, {
    cols: 4,
    breakpoints: [{ maxWidth: "sm", cols: 1 }],
    mt: previews.length > 0 ? "xl" : 0
  }, previews));
}
const preview = {
  type: "demo",
  component: Demo,
  code
};

exports.preview = preview;
//# sourceMappingURL=Dropzone.demo.preview.js.map
