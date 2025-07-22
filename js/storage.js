const STORAGE_KEY = 'editorOptions';

/**
 * オプションを保存する
 * @param language
 * @param theme
 * @param tabSize
 */
export function saveOptions({ language, theme, tabSize }) {
  const options = JSON.stringify({ language, theme, tabSize });
  localStorage.setItem(STORAGE_KEY, options);
}

/**
 * オプションを取得する
 * @returns {any|null}
 */
export function fetchOptions() {
  const savedOptions = localStorage.getItem(STORAGE_KEY);
  if (!savedOptions) {
    return null;
  }
  return JSON.parse(savedOptions);
}