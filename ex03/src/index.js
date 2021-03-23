function printManyTimes(str) {
    "use strict";
    let SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    return SENTENCE;
}
printManyTimes("Arena");
module.exports = printManyTimes;