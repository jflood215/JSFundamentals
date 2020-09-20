var num1 = document.getElementById("num1") as HTMLInputElement
var num2 = document.getElementById("num2") as HTMLInputElement
var button = document.getElementById("button1") as HTMLButtonElement
button.addEventListener("click", function () {
    addNumbers(+num1.value, +num2.value);
});
function addNumbers(num1: number, num2: number) {
    return console.log(num1 + num2);
}
//# sourceMappingURL=just-typescript.js.map