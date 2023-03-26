'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var prism = require('@mantine/prism');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const go = `
package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\`)
    go println(len("hello world!"))
    return
}
`;
const py = `
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
`;
const css = `
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 2rem/2rem Helvetica, sans-serif;
}

@import url(print.css);

@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
`;
const sql = `
CREATE TABLE "topic" (
  "id" serial NOT NULL PRIMARY KEY,
  "forum_id" integer NOT NULL,
  "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(prism.Prism.Tabs, {
    defaultValue: "go"
  }, /* @__PURE__ */ React__default.createElement(prism.Prism.TabsList, null, /* @__PURE__ */ React__default.createElement(prism.Prism.Tab, {
    value: "go"
  }, "Go"), /* @__PURE__ */ React__default.createElement(prism.Prism.Tab, {
    value: "python"
  }, "Python"), /* @__PURE__ */ React__default.createElement(prism.Prism.Tab, {
    value: "css"
  }, "CSS"), /* @__PURE__ */ React__default.createElement(prism.Prism.Tab, {
    value: "sql"
  }, "SQL")), /* @__PURE__ */ React__default.createElement(prism.Prism.Panel, {
    value: "go",
    language: "go"
  }, go), /* @__PURE__ */ React__default.createElement(prism.Prism.Panel, {
    value: "python",
    language: "python"
  }, py), /* @__PURE__ */ React__default.createElement(prism.Prism.Panel, {
    value: "css",
    language: "css"
  }, css), /* @__PURE__ */ React__default.createElement(prism.Prism.Panel, {
    value: "sql",
    language: "sql"
  }, sql));
}
const languages = {
  type: "demo",
  component: Demo
};

exports.css = css;
exports.go = go;
exports.languages = languages;
exports.py = py;
//# sourceMappingURL=Prism.demo.languages.js.map
