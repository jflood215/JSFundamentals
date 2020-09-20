var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button = document.getElementById("button1");
button.addEventListener("click", function () {
    addNumbers(+num1.value, +num2.value);
});
function addNumbers(num1, num2) {
    return console.log(num1 + num2);
}
//# sourceMappingURL=just-typescript.js.map