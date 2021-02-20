const generate = document.getElementById(`generate`);
const button = document.getElementById(`button`);
const copy = document.getElementById(`copy`);
const chars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-?<>{}[]`;
function generateRndmPassword() {
  let passwordLength = 15;
  let password = ``;
  let i = 0;
  for (; i < passwordLength; ) {
    password += chars.substr(Math.floor(Math.random() * chars.length), 1);
    i++;
  }
  generate.value = password;
}
button.addEventListener(`click`, generateRndmPassword);
function copyRndmPassword() {
  navigator.clipboard.writeText(generate.value).then(() => {
    copy.innerText = `Password copied!`;
  });
  setTimeout(() => {
    copy.innerText = `Copy Password`;
  }, 1000);
}
copy.addEventListener(`click`, copyRndmPassword);
