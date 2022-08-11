// function concat(array1, array2) {
//   let newArray = array1;
//   for (const element of array2) {
//     newArray.push(element);
//   }
//   return newArray;
// }

function concat(array1, array2) {
  return [...array1, ...array2];
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);