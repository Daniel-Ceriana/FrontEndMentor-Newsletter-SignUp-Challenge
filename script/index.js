const modal = document.querySelector(".bg-modal");
const submitButton = document.querySelector(".submit-button");
const dismissButton = document.querySelector(".dismiss-button");
const email = document.querySelector(".info-form__form--text-input");
const modalEmail = document.querySelector(".modal-email");
const errorMessage = document.querySelector(".info-form__form--labels-error");

let emailBgColorDefault = email.style.backgroundColor;
let emailBorderColorDefault = email.style.borderColor;

// Submit del form, con validaciones para que el mail sea valido
submitButton.addEventListener("click", (e) => {
        //test de expresiones regulares
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let esValido = expReg.test(email.value);
        console.log(email.value);

        console.log(esValido);
        if (!esValido) {
            errorMessage.style.display = "block";
            email.style.backgroundColor = "hsl(4, 100%, 95%)";
            email.style.borderColor = "hsl(4, 100%, 50%)";
        } else {
            //mostrar ventana modal si todo es correcto
            modalEmail.textContent = email.value;
            console.log(modalEmail.textContent);
            modal.style.display = "grid";

        }


    })
    // Boton de ventana modal para volver
dismissButton.addEventListener("click", (e) => {
    modal.style.display = "none";
    errorMessage.style.display = "none";
    email.style.backgroundColor = emailBgColorDefault;
    email.style.borderColor = emailBorderColorDefault;
    email.value = "";
})