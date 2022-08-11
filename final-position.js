const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
/* const finalPosition = function (moves) {
  let output = [0, 0]
  for (let move = 0; move < moves.length; move++) {
    if (moves[move] === 'north') {
      output[1]++
    }
    if (moves[move] === 'south') {
      output[1]--
    }
    if (moves[move] === 'west') {
      output[0]--
    }
    if (moves[move] === 'east') {
      output[0]++
    }
  }
  return output
}
console.log(finalPosition(moves))
*/

const finalPosition = function (moves) {
  let output = [0, 0]
  for (const move of moves) {
    if (move === 'north') {
      output[1]++
    }
    if (move === 'south') {
      output[1]--
    }
    if (move === 'west') {
      output[0]--
    }
    if (move === 'east') {
      output[0]++
    }
  }
  return output
}
console.log(finalPosition(moves))
