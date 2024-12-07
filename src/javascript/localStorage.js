
export function initializeLocalStorage(key, initialData) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initialData));
  }
}

export async function fetchAndStoreData(key, value) {
  try {
      const data = await value;
      initializeLocalStorage(key, data);
  } catch (error) {
      console.error('Failed to fetch data:', error);
  }
}

export function getState(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}

export function setState(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}