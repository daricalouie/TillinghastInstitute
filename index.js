var loggedIn = false;
var loginAttempts = 0;

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgottenPassword = document.getElementById("forgot-password");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value;

    if (username === "bruce@tillinghastorganization.com" && password === "pineapple") {
        // alert("You have successfully logged in.");
        document.getElementById('id01').style.display='none';
        loggedIn = true;
    } else {
        loginErrorMsg.style.opacity = 1;
        loginAttempts++;
        if(loginAttempts > 2){
            forgottenPassword.style.opacity = 1;
        }
    }
})



function checkLoggedIn (){
    if(loggedIn){
        document.getElementById('id01').style.display='none';
    }
}

window.onload = checkLoggedIn;