const paasswordBox = document.querySelector("#password");
const btn = document.querySelector('.btn');
const copyBtn = document.querySelector('.copy');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]|\:;,<>.?/";

const allChars = upperCase + lowerCase + number + symbols;

btn.addEventListener("click",function(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    paasswordBox.value = password;
});

copyBtn.addEventListener("click",function(){
    paasswordBox.select();
    document.execCommand("copy");
})

