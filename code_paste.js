let thisEditor;

const themeSelect = document.querySelector('#options__select-theme__select');
themeSelect.addEventListener('change', ({ target }) => changeTheme(target.value));
const languageSelect = document.querySelector('#options__select-language__select');
languageSelect.addEventListener('change', ({ target }) => changeLanguagesMode(target.value));
const tabSizeSelect = document.querySelector('#options__tab-size__select');
tabSizeSelect.addEventListener('change', ({target}) => changeTabSize(target.value));
const copyButton = document.querySelector('.button-area__copy');
copyButton.addEventListener('click', () => copyCode());
const saveOptionsButton = document.querySelector('.button-area__save-options');
saveOptionsButton.addEventListener('click',  async () => await saveOptions());

window.onload = async () => {
    const savedOptions = await fetchOptionsFromLocalStorage().catch(() => null);
    if (!savedOptions) {
        initializeEditorIfNoSaveOptions();
        return;
    }
    initializeEditorIfSavedOptions(savedOptions);
};

function initializeEditorIfNoSaveOptions() {
    thisEditor = ace.edit('editor', {
        mode: 'ace/mode/javascript',
        theme: 'ace/theme/chrome',
        useSoftTabs: false,
    });
}

function initializeEditorIfSavedOptions({language, theme, tabSize}) {
    languageSelect.value = language;
    themeSelect.value = theme;
    tabSizeSelect.value = tabSize;

    thisEditor = ace.edit('editor', {
        mode: `ace/mode/${language}`,
        theme: `ace/theme/${theme}`,
        tabSize: Number(tabSize),
        useSoftTabs: false,
    });
}

function changeTheme(theme) {
    thisEditor.setTheme(`ace/theme/${theme}`);
}

function changeLanguagesMode(languageMode) {
    thisEditor.session.setMode(`ace/mode/${languageMode}`);
}

function changeTabSize(size) {
    thisEditor.session.setTabSize(Number(size));
}

function copyCode() {
    thisEditor.selectAll();
    document.execCommand('copy');
}

async function saveOptions() {
    const language = languageSelect.value;
    const theme = themeSelect.value;
    const tabSize = tabSizeSelect.value;

    await saveOptionsToLocalStorage({language, theme, tabSize});
}

function saveOptionsToLocalStorage({language, theme, tabSize}) {
    return new Promise(resolve => {
        chrome.storage.local.set({
            language, theme, tabSize
        }, () => resolve());
    });
}

function fetchOptionsFromLocalStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['language', 'theme', 'tabSize'],
            ({language, theme, tabSize}) => {
                if (!language) {
                    return reject();
                }
                resolve({language, theme, tabSize})
            });
    });
}
