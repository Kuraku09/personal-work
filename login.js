const myEmail = document.querySelector('.my-email');
const myPassword = document.querySelector('.my-password');
const myLogin = document.querySelector('.my-login');
console.log(myEmail);
myLogin.addEventListener('click', () => {
    if (myPassword.value === 'null' || myPassword.value === 'null') {
        alert("請輸入正確的信箱和密碼");
    } 
})