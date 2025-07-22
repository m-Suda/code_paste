import { editorInstance } from '../ace-editor.js';

/**
 * Languageセレクトボックスが変更されたとき、Editorの言語に反映する。
 * @type {Element}
 */
const languageSelectBox = document.querySelector('#options__select-language__select');
if (languageSelectBox) {
  languageSelectBox.addEventListener('change', ({ target }) => {
    if (editorInstance) {
      editorInstance.session.setMode(`ace/mode/${target.value}`);
    } else {
      console.warn("Editor instance not available to set language mode.");
    }
  });
} else {
  console.warn('Language select element not found!');
}