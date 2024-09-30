// const repeatString = function(message, times) {
//     for (let index = 0; index < times; index++) {
//         let repeated = message;
//         return repeated;
//     }
//         repeatString;   
// };

function repeatString(message, times) {
    if (times < 0) {
        return "ERROR"
    }
    let returnMessage = ""
    for (let index = 0; index < times; index++) {
        returnMessage +=  message
        
    } return (returnMessage)  
}
   


// Do not edit below this line
module.exports = repeatString;
