
let myName;
let massage;

myName = "Padawans";
function myMsg(name) {
    "use strict";
    massage = "Hello, " + name + "!";

    return massage;
}
console.log(myMsg(myName));
module.exports = myMsg;