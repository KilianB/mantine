import React, { useState } from 'react';
import { Image, Text, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

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
  const [files, setFiles] = useState([]);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return /* @__PURE__ */ React.createElement(Image, {
      key: index,
      src: imageUrl,
      imageProps: { onLoad: () => URL.revokeObjectURL(imageUrl) }
    });
  });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Dropzone, {
    accept: IMAGE_MIME_TYPE,
    onDrop: setFiles
  }, /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Drop images here")), /* @__PURE__ */ React.createElement(SimpleGrid, {
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

export { preview };
//# sourceMappingURL=Dropzone.demo.preview.js.map
