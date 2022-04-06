/**
 * mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
 * [0, 3, 4, 4, 6, 30, 31]
 *  */

const mergeSortedArrays = (array1, array2) => {
  let mergedArray = [];

  let arrayOneItem = array1[0];
  let arrayTwoItem = array2[0];

  let i = 1;
  let j = 1;

  // check inputs
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (arrayOneItem || arrayTwoItem) {
    console.log(arrayOneItem, arrayTwoItem);

    if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
      mergedArray.push(arrayOneItem);
      arrayOneItem = array1[i];
      i++;
    } else {
      mergedArray.push(arrayTwoItem);
      arrayTwoItem = array2[j];
      j++;
    }
  }

  return mergedArray;
};

console.log("answer", undefined < 6);

console.log(mergeSortedArrays([1, 3, 4, 31], [4, 6, 30]));
