var loggedIn = false;
var loginAttempts = 0;

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgottenpassword = document.getElementById("forgot-password");

const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const results = document.getElementById("search-results");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "thatgirlcharliexx@gmail.com" && password === "pineapple") {
        // alert("You have successfully logged in.");
        document.getElementById('id01').style.display='none';
        loggedIn = true;
    } else {
        loginErrorMsg.style.opacity = 1;
        loginAttempts++;
        if(loginAttempts > 2){
            forgottenpassword.style.opacity = 1;
        }
    }
})

searchButton.addEventListener("click", (e) => {
    console.log("search button pressed");
    searchterm = searchbar.search.value;
    results.innerHTML = "No results found for \"" + searchterm + "\". Please refine your search.";
})

function checkLoggedIn (){
    if(loggedIn){
        document.getElementById('id01').style.display='none';
    }
}

window.onload = checkLoggedIn;