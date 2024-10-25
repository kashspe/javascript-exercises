 const removeFromArray = function(inputArray, ...toRemove) {
    return inputArray.filter(verif)
    function verif(elementToRemove) {
        return !toRemove.includes(elementToRemove)
    }
    }
 
/*function removeFromArray( array, ...toSupp) {
    return array.filter(item => !toSupp.includes(item)); 
}
*/
// for (const item of inputArray) {
//     if (item == toRemove) {
//         inputArray.filter
//     }
// }
// const inputArray = [45, 4, 9, 16, 25];
// const toRemove =
// const filteredArray = inputArray.filter(myFunction);

// function myFunction(inputArray, toRemove) {
//   return toRemove != inputArray;
// }
// Do not edit below this line
module.exports = removeFromArray;
