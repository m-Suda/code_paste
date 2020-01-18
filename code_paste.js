/**
 * エディターのセッション
 */
let thisEditor;

/**
 * Editorの各オプションとコピーボタン
 * @type {Element}
 */
const themeSelect = document.querySelector('#options__select-theme__select');
const languageSelect = document.querySelector('#options__select-language__select');
const tabSizeSelect = document.querySelector('#options__tab-size__select');
const copyButton = document.querySelector('.options__copy-button');

/**
 * 初期表示時の処理
 */
window.onload = () => {
    thisEditor = ace.edit('editor', {
        mode: 'ace/mode/javascript',
        theme: 'ace/theme/chrome',
        useSoftTabs: false,
    });
};

/**
 * 各オプションのイベント
 */
themeSelect.addEventListener('change', ({ target }) => changeTheme(target.value));
languageSelect.addEventListener('change', ({ target }) => changeLanguagesMode(target.value));
tabSizeSelect.addEventListener('change', ({target}) => changeTabSize(target.value));
copyButton.addEventListener('click', () => copyCode());

/**
 * Editorのテーマを変更する。
 * @param {string} theme
 */
function changeTheme(theme) {
    thisEditor.setTheme(`ace/theme/${theme}`);
}

/**
 * 言語モードを変更する。
 * @param {string} languageMode
 */
function changeLanguagesMode(languageMode) {
    thisEditor.session.setMode(`ace/mode/${languageMode}`);
}

/**
 * タブサイズを変更する。
 * @param {string} size
 */
function changeTabSize(size) {
    thisEditor.session.setTabSize(Number(size));
}

/**
 * コードをクリップボードにコピーする。
 */
function copyCode() {
    thisEditor.selectAll();
    document.execCommand('copy');
}
