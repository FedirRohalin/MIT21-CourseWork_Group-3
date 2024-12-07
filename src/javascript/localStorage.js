export function initializeLocalStorage(key, initialData) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initialData));
  }
}

export function getState(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}

export function setState(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}