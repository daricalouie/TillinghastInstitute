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
    if(searchterm== "numerology"){
        results.innerHTML="1 result found for \"numerology\"<br><br>\
        Numerology number meanings:<br>\
        1: The goal-driven, independent and innovative.<br>\
        2: Gentle, indecisive and sensitive.<br>\
        3: Communicative, charmic and creative.<br>\
        4: Practical, loyal and hard-working.<br>\
        5. Curious, adaptable and resourceful.<br>\
        6. Supportive, nurturing and romantic.<br>\
        7. Analytical, spiritual and knowledgeable.<br>\
        8. Enduring, ambitious and balanced.<br>\
        9. Awakening, enlightened and healing.<br>"
    }else{
        results.innerHTML = "No results found for \"" + searchterm + "\". Please refine your search.";
    }
    resultsWindow.style.padding = "20px 18px" ;    
    resultsWindow.style.maxHeight = resultsWindow.scrollHeight + 40 +"px";
    
    
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