let add = document.getElementById("c11");
let subtract = document.getElementById("c12");
let multiply = document.getElementById("c13");
let divsion = document.getElementById("c14");
let otpt = document.getElementById("otpt_area");
let number = document.getElementsByClassName('num');
let clear = document.getElementById("c53");
console.log(number[0]);
console.log(number.length);
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function() {
        otpt.innerText += number[i].innerText;
    });    
}
clear.addEventListener("click", function() {
    otpt.innerHTML = '';
})
console.log(typeof(number[3].value));