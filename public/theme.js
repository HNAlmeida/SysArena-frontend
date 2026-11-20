// Executado no <head> para aplicar a preferência antes da primeira pintura.
(() => {
  const darkThemes = ["arena-dark", "dark", "dim", "night", "sunset"];
  const lightThemes = [
    "arena-light",
    "light",
    "winter",
    "nord",
    "cmyk",
    "pastel",
  ];
  let storedTheme;

  try {
    storedTheme = localStorage.getItem("theme");
  } catch {
    // O tema também funciona quando o navegador bloqueia o armazenamento.
  }

  const isDark = darkThemes.includes(storedTheme)
    ? true
    : lightThemes.includes(storedTheme)
      ? false
      : window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  document.documentElement.dataset.theme = isDark
    ? "arena-dark"
    : "arena-light";
})();
