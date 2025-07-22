import { editorInstance } from '../ace-editor.js';

/**
 * Tab Sizeセレクトボックスが変更された時、Editorに反映する。
 * @type {Element}
 */
const tabSizeSelect = document.querySelector('#options__tab-size__select');
if (tabSizeSelect) {
  tabSizeSelect.addEventListener('change', ({ target }) => {
    if (editorInstance) {
      editorInstance.session.setTabSize(Number(target.value));
    } else {
      console.warn("Editor instance not available to set tab size.");
    }
  });
} else {
  console.warn('Tab size select element not found!');
}