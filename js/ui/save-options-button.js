import { saveOptions } from "../storage.js";

const saveOptionsButton = document.querySelector('.button-area__save-options');
const languageSelect = document.querySelector('#options__select-language__select');
const themeSelect = document.querySelector('#options__select-theme__select');
const tabSizeSelect = document.querySelector('#options__tab-size__select');

if (saveOptionsButton && languageSelect && themeSelect && tabSizeSelect) {
  saveOptionsButton.addEventListener('click', async () => {
    const language = languageSelect.value;
    const theme = themeSelect.value;
    const tabSize = tabSizeSelect.value;

    await saveOptions({language, theme, tabSize});
    alert('設定を保存しました！');
    console.log("options: ", { language, theme, tabSize });
    console.log("Options save process completed by save button.");
  });
} else {
  console.warn('Save options button or related select elements not found!');
}