var msgBox = document.querySelector("INPUT");
var btn = document.querySelector("BUTTON");
var alert = document.querySelector("H5");
var delivered = document.querySelector("#deliveredMessage");
btn.addEventListener('click', display);
function display() {
    if (msgBox.value == "") {
        alert.classList.add("show");
        setTimeout(function () {
            alert.classList.remove("show");
        }, 2000);
    }
    else {
        delivered.innerHTML = msgBox.value;
    }
}