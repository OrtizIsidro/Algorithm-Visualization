function merge(state, start, middle, end, stateInOrder) {
  let key = start;
  let left = start;
  let right = middle + 1;
  let stateCopy = [...state];
  while (left <= middle && right <= end) {
    if (stateCopy[left] <= stateCopy[right]) {
      state[key++] = stateCopy[left++];
    } else {
      state[key++] = stateCopy[right++];
    }
    stateInOrder.push({
      state: [...state],
      changing: [key, left, right],
      alreadySorted: [],
    });
  }
  while (left <= middle) {
    state[key++] = stateCopy[left++];
    stateInOrder.push({
      state: [...state],
      changing: [key, left],
      alreadySorted: [],
    });
  }
  while (right <= end) {
    state[key++] = stateCopy[right++];
    stateInOrder.push({
      state: [...state],
      changing: [key, right],
      alreadySorted: [],
    });
  }
}

function mergeSort(state, start, end, stateOrder) {
  debugger;
  if (start === end) return;
  let middle = Math.floor((start + end) / 2);
  mergeSort(state, start, middle, stateOrder);
  mergeSort(state, middle + 1, end, stateOrder);
  merge(state, start, middle, end, stateOrder);
}
export { mergeSort };
/// ejecucion por cada cambio, en esa ejecucion modificar el estado
