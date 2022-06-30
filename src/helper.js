import {
  selectionSortSequence,
  BubbleSortSequence,
  mergeSortSequence,
} from "./algorithms";
const algorithms = [
  selectionSortSequence,
  BubbleSortSequence,
  mergeSortSequence,
];
const updateStateInSequence = (algID, callback, unsortedArray, SPEED) => {
  const sortedStateSequence = algorithms[algID](unsortedArray);
  const FINISH_TIME = SPEED * sortedStateSequence.length;

  sortedStateSequence.forEach((state, delay) =>
    setTimeout(() => callback({ ...state }), SPEED * delay)
  );
  return (onFinish) => setTimeout(() => onFinish(), FINISH_TIME);
};

function shuffle(originalArray) {
  const array = [...originalArray];
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    [array[randomIndex], array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
  }
  return array;
}

export { updateStateInSequence, shuffle };
//iterar items con un componente
