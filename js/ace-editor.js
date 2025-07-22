// Ace Editor
export let editorInstance;

const USE_SOFT_TABS = false;

/**
 * 初期設定がない場合にAce Editorを初期化する
 */
export function initializeEditorIfNoSaveOptions() {
  const options = {
    mode: 'ace/mode/php',
    theme: 'ace/theme/monokai',
    useSoftTabs: USE_SOFT_TABS,
  };
  editorInstance = ace.edit('editor', options);
}

export function initializeEditorIfSaveOptions({ language, theme, tabSize }) {
  const options = {
    mode: `ace/mode/${language}`,
    theme: `ace/theme/${theme}`,
    tabSize: Number(tabSize),
    useSoftTabs: USE_SOFT_TABS
  };
  editorInstance = ace.edit('editor', options);
}