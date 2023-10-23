function showAlert() {
    alert("I have been clicked");
}

var button = document.getElementById("myButton");

button.addEventListener("click", showAlert);
