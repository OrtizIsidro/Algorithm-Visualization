import { mergeSort } from "./mergeSortAlgorithm";

function Change(state, changing, alreadySorted) {
  return {
    state: [...state],
    changing: [...changing],
    alreadySorted: [...alreadySorted],
  };
}

function selectionSortSequence(unsortedArray) {
  const array = [...unsortedArray];
  const stateOrder = [];
  const alreadySorted = [];
  for (let i = 0; i < array.length; i++) {
    const actualIndex = i;
    let lowestIndex = i;
    for (let i = actualIndex + 1; i < array.length; i++) {
      let currentIndex = i;
      if (array[currentIndex] < array[lowestIndex]) {
        lowestIndex = currentIndex;
      }
      const change = new Change([...array], [currentIndex], [...alreadySorted]);
      stateOrder.push(change);
    }
    [array[lowestIndex], array[actualIndex]] = [
      array[actualIndex],
      array[lowestIndex],
    ]; // swap array
    alreadySorted.push(actualIndex);
    const change = new Change(
      [...array],
      [actualIndex, lowestIndex],
      [...alreadySorted]
    );
    stateOrder.push(change);
  }
  return stateOrder;
}

function BubbleSortSequence(unsortedArray) {
  const array = [...unsortedArray];
  const stateOrder = [];
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < array.length; j++) {
      let left = j;
      let rigth = j + 1;
      if (array[left] > array[rigth]) {
        [array[rigth], array[left]] = [array[left], array[rigth]];
        const change = new Change([...array], [rigth], []);
        stateOrder.push(change);
      }
    }
  }
  return stateOrder;
}

function mergeSortSequence(originalArray) {
  let stateInOrder = [];
  let arrayCopy = [...originalArray];
  mergeSort(arrayCopy, 0, originalArray.length - 1, stateInOrder);
  return stateInOrder;
}

export { selectionSortSequence, BubbleSortSequence, mergeSortSequence };
