

// user Log-In


const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY",username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username);   
}

function paintGreetings (username){
    greeting.innerText = `Hello  ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem("USERNAME_KEY")


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else{
    paintGreetings(savedUsername)
    }
