const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

// the default state is 'disabled'
formButton.disabled = true; 

// alternative is to use "change" - explained below
formInput.addEventListener("keyup", buttonState);

function buttonState() {
    if (document.querySelector(".form-input").value === "") {
        formButton.disabled = true; // return disabled as true whenever the input field is empty
    } else {
        formButton.disabled = false; // enable the button once the input field has content
    }
}
