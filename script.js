const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{

    if(password.vale!==confirmPassword.value){
        event.preventDefault();
        confirmPassword.setCustomValidity("password do not match");
        confirmPassword.reportValidity();
        
    }
    else{
        confirmPassword.setCustomValidity("");

    }

});

confirmPassword.addEventListener("input",()=>{
    confirmPassword.setCustomValidity("");
});