const myInputs = document.querySelectorAll('.my-input');
const btnClaim = document.getElementById('btnClaim');

btnClaim.addEventListener("click", (event) => {
    event.preventDefault();
    myInputs.forEach(function(input){
        if(input.value.trim() === ""){
            input.classList.add("alert-error");
            input.placeholder = ""

            if(input.type === "email") {
                input.placeholder = "email@exemple.com"
                input.classList.add("error-placeholder");
            }
            if(input.nextElementSibling) {
                input.nextElementSibling.classList.add("mostrar");
            }
        } else {
            input.classList.remove("alert-error");

            if(input.type === "email"){
                input.classList.remove("error-placeholder");
            }

            if(input.nextElementSibling){
                input.nextElementSibling.classList.remove("mostrar")
            }
        }

        if(input.type === "email" && input.value.trim() !== "") {
            if(!validateEmail(input.value.trim())) {
                input.classList.add("alert-error");
                input.nextElementSibling.classList.add("mostrar");
                input.placeholder = "email@exemple.com";
                input.classList.add("error-placeholder");
            } else {
                input.classList.remove("alert-error");
                input.nextElementSibling.classList.remove("mostrar");
            }
        }
    });
});

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}