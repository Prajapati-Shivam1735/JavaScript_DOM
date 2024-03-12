var keydownInput = document.getElementById("keydownInput");

    keydownInput.addEventListener("keydown", function(event) {
        alert("Key down: " + String.fromCharCode(event.keyCode));
    });

    keydownInput.addEventListener("keyup", function(event) {
        alert("Key up: " + String.fromCharCode(event.keyCode));
    });