// const reverseString = function("stringToReverse") {
//     let rever
// };

function reverseString(word) {
    let wordReversedArray = "";
    for (let index = word.length; index > 0; index--) {
        let a = word.charAt(index - 1);
        wordReversedArray += a
    }
    return wordReversedArray;
}

// Do not edit below this line
module.exports = reverseString;
