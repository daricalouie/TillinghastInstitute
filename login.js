var loggedIn = false;
var loginAttempts = 0;

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgottenPassword = document.getElementById("forgot-password");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value.trim().toLowerCase();
    const password = loginForm.password.value.toLowerCase();

    if (username === "bruce@tillinghastorganization.com" && password === "pineapple") {
        // alert("You have successfully logged in.");
        document.getElementById('id01').style.display = 'none';
        loggedIn = true;
        var now = new Date();
        var time = now.getTime();
        time += 3600 * 1000;
        now.setTime(time);
        document.cookie="username=bruce; expires="+now.toUTCString()+";";
        document.getElementById('page-content').style.display ='block';

    } else {
        loginErrorMsg.style.opacity = 1;
        loginAttempts++;
        if (loginAttempts > 2) {
            forgottenPassword.style.opacity = 1;
        }
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkLoggedIn() {
    var username = getCookie("username");
    console.log("checking cookie");
    console.log(username);
    if (username == "bruce") {
        document.getElementById('id01').style.display = 'none';
        document.getElementById('page-content').style.display ='block';
    }
    else{
        document.getElementById('id01').style.display = 'block';
    }
}
 window.onload = checkLoggedIn;