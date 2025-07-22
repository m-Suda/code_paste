import { editorInstance } from "../ace-editor.js";

/**
 * Themeセレクトボックスが変更されたとき、Editorのテーマに反映する。
 * @type {Element}
 */
const themeSelectBox = document.querySelector('#options__select-theme__select');
if (themeSelectBox) {
  themeSelectBox.addEventListener('change', ({ target }) => {
    if (editorInstance) {
      editorInstance.setTheme(`ace/theme/${target.value}`);
    } else {
      console.warn('Editor instance not available to set theme.');
    }
  });
} else {
  console.warn('Theme select box element not found.');
}