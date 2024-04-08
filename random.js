const passwordBox=document.querySelector("#password")
const val=document.querySelector("#length")
const btn=document.querySelector("button")
const img=document.querySelector("#image")

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*_+()-="

const alchars=upperCase+lowerCase+number+symbol

let createPassword=()=>{
    let passLen=parseInt(val.value)
    let length=passLen
    let password=""
    if(val.value===''){
        length=8
        while(length>password.length){
            password+=alchars[Math.floor(Math.random()*alchars.length)]
            passwordBox.value=password
        }

        alert("Enter the password length")

    }else 
    if(length>18 ){
        length=8
        while(length>password.length){
            password+=alchars[Math.floor(Math.random()*alchars.length)]
            passwordBox.value=password
        }

        alert("Password length  should be less than or equal to 18")

    }  else if(length===0){
        alert("Password length should be greater than 0")
        length=8
        while(length>password.length){
            password+=alchars[Math.floor(Math.random()*alchars.length)]
            passwordBox.value=password
        }

    }else{

        if(length<4){
            while(length>password.length){
                password+=alchars[Math.floor(Math.random()*alchars.length)]
                passwordBox.value=password
            }
        }else{
            password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]

    while(length>password.length){
        password+=alchars[Math.floor(Math.random()*alchars.length)]
    }
    passwordBox.value=password
           

    }
}
}



//button to generate password on click
btn.addEventListener("click",()=>{
    createPassword()
})

img.addEventListener("click",()=>{
    copyPassword()
    alert("copid")
})

//copy the password

let copyPassword=()=>{
    passwordBox.select()
    document.execCommand("copy");
}
