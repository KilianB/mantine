import TipTapLink from '@tiptap/extension-link';

const Link = TipTapLink.extend({
  addKeyboardShortcuts: () => ({
    "Mod-k": () => {
      window.dispatchEvent(new Event("edit-link"));
      return true;
    }
  })
}).configure({ openOnClick: false });

export { Link };
//# sourceMappingURL=Link.js.map
