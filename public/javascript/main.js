pawToggled = false;
var myTimeout;

function callbackToggle() {
    return function () {
        if (pawToggled) {
            document.getElementById("main-button").click();
        }
    }
}

function togglePaw() {
    if (!pawToggled) {
        // Runs when we toggle the button
        document.getElementsByClassName("paw-container")[0].classList.add("paw-extended");
        myTimeout = setTimeout(callbackToggle(), 600);
    } else {
        document.getElementsByClassName("paw-container")[0].classList.remove("paw-extended");
        clearTimeout(myTimeout);
    }

    pawToggled = !pawToggled;
}