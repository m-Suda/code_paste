let thisEditor;
const themeSelect = document.querySelector('#options__select-theme__select');
const languageSelect = document.querySelector('#options__select-language__select');
const tabSizeSelect = document.querySelector('#options__tab-size__select');
const copyButton = document.querySelector('.options__copy-button');

window.onload = () => {
    thisEditor = ace.edit('editor', {
        mode: 'ace/mode/javascript',
        theme: 'ace/theme/chrome',
        useSoftTabs: false,
    });
};

themeSelect.addEventListener('change', ({ target }) => changeTheme(target.value));
languageSelect.addEventListener('change', ({ target }) => changeLanguagesMode(target.value));
tabSizeSelect.addEventListener('change', ({target}) => changeTabSize(target.value));
copyButton.addEventListener('click', () => copyCode());

function changeTheme(theme) {
    thisEditor.setTheme(`ace/theme/${theme}`);
}

function changeLanguagesMode(languageMode) {
    thisEditor.session.setMode(`ace/mode/${languageMode}`);
}

function changeTabSize(size) {
    thisEditor.session.setTabSize(size);
}

function copyCode() {
    thisEditor.selectAll();
    document.execCommand('copy');
}
