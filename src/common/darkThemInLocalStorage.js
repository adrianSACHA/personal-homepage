const localStorageKey = "isDarkTheme";

export const saveDarkThemeInLocalStorage = (isDarkTheme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDarkTheme));

export const getDarkThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
