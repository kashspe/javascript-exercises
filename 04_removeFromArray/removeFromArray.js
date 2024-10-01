// const removeFromArray = function() {
// };
function removeFromArray( array, ...toSupp) {
    return array.filter(item => !toSupp.includes(item)); 
}

// Do not edit below this line
module.exports = removeFromArray;
