var loggedIn = false;
var loginAttempts = 0;

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgottenPassword = document.getElementById("forgot-password");

const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");
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
            forgottenPassword.style.opacity = 1;
        }
    }
})

function searchHandler(){
    searchterm = searchbar.search.value;
    results.innerHTML = "No results found for \"" + searchterm + "\". Please refine your search.";
    resultsWindow.style.maxHeight = resultsWindow.scrollHeight +"px";
    resultsWindow.style.padding = "20px 18px" ;    
    
}

searchButton.addEventListener("click", (e) => {
    console.log("search button pressed");
    searchHandler();
})
searchbar.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault()
    console.log("search submitted");
    searchHandler();
  })

function checkLoggedIn (){
    if(loggedIn){
        document.getElementById('id01').style.display='none';
    }
}

window.onload = checkLoggedIn;