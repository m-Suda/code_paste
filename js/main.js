import { fetchOptions } from "./storage.js";
import { initializeEditorIfNoSaveOptions, initializeEditorIfSaveOptions } from "./ace-editor.js";

/**
 * Ace Editorの初期化
 */
document.addEventListener('DOMContentLoaded', () => {
  // chromeのlocalStorageからオプションを取得
  const saveOptions = fetchOptions();

  // オプションが保存されてなければデフォルト
  if (!saveOptions) {
    initializeEditorIfNoSaveOptions();
    return;
  }

  // UIの初期値を保存された値で更新
  const languageSelect = document.querySelector('#options__select-language__select');
  const themeSelect = document.querySelector('#options__select-theme__select');
  const tabSizeSelect = document.querySelector('#options__tab-size__select');
  if (languageSelect) languageSelect.value = saveOptions.language;
  if (themeSelect) themeSelect.value = saveOptions.theme;
  if (tabSizeSelect) tabSizeSelect.value = saveOptions.tabSize;

  initializeEditorIfSaveOptions(saveOptions);
});
