export function initializeLocalStorage(initialData) {
  localStorage.setItem("state", JSON.stringify(initialData));
}

export function getState() {
  const existedState = localStorage.getItem('state');
  let state;
  if (existedState) {
      state = JSON.parse(existedState);
  } else {
      const initialState = document.querySelector(selectors.stateJson).textContent;
      state = JSON.parse(initialState);
  }

  localStorage.setItem('state', JSON.stringify(state));
  return state;
}

export function setState(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}