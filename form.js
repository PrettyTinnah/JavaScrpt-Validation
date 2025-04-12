function submitDetails(event){
    event.preventDefault(); 
    let username=document.querySelector(".username-input");

let name= username.value;

let userNameError=document.getElementById("userNameError");

if (name.length >= 3){
    userNameError.style.display="none";  
}
else if (name.length <3){';/.":?";;';;';'
    userNameError.style.display="inline";
}
console.log("Username:", name);
console.log("Length:", name.length);
}

document.getElementById("myForm").addEventListener("submit", submitDetails);


