document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    alert("Key pressed: " + String.fromCharCode(event.keyCode));
});