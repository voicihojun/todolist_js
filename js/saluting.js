const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const saluting = document.querySelector("#saluting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //   saluting.innerText = `Salut, ${username}`;
  //   saluting.classList.remove(HIDDEN_CLASSNAME);
  showSaluting(username);
}

function showSaluting(username) {
  saluting.innerText = `Salut, ${username}`;
  saluting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  //   saluting.innerText = `Salut, ${savedUsername}`;
  //   saluting.classList.remove(HIDDEN_CLASSNAME);
  showSaluting(savedUsername);
}
