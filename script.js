const btn = document.querySelector(".btn");
const input = document.querySelector(".input-txt");

btn.addEventListener("click",copyText);
function copyText(){
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("copied to clipboard");
}