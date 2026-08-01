export const MENU_ACCESS_UPDATED_EVENT = "sysarena:menu-access-updated";

const MENU_ACCESS_STORAGE_KEY = "sysarena:navbar-menu-access";

export function buildMenuAccessKey(moduleId, itemPath = []) {
  if (!moduleId || itemPath.length === 0) {
    return null;
  }

  return `${moduleId}:${itemPath.join(">")}`;
}

export function readMenuAccessCounts() {
  const storedCounts = localStorage.getItem(MENU_ACCESS_STORAGE_KEY);

  if (!storedCounts) {
    return {};
  }

  try {
    return JSON.parse(storedCounts);
  } catch {
    return {};
  }
}

export function incrementMenuAccessCount(menuKey) {
  const currentCounts = readMenuAccessCounts();

  if (!menuKey) {
    return currentCounts;
  }

  const nextCounts = {
    ...currentCounts,
    [menuKey]: (currentCounts[menuKey] ?? 0) + 1,
  };

  localStorage.setItem(MENU_ACCESS_STORAGE_KEY, JSON.stringify(nextCounts));

  window.dispatchEvent(
    new CustomEvent(MENU_ACCESS_UPDATED_EVENT, {
      detail: { counts: nextCounts, menuKey },
    }),
  );

  return nextCounts;
}
