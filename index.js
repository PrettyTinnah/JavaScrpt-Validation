function userName(){
    const inputName= document.querySelector('.user-name');
    const inputValue=inputName.value;
    console.log(inputValue)
    if(!inputValue == ""){
        if(inputValue.length >= 3){
            document.querySelector('.user-message').innerText="Correct format"
        }
        else{
            document.querySelector('.user-message').innerText="Must be at least 3 characters long"
        }
    }
    else if(inputValue == ""){
        document.querySelector('.user-message').innerText="Required field"
    }
}

function emailInput(){
    const inputEmail= document.querySelector('.email');
    const emailValue= inputEmail.value;

    const parts= emailValue.split('@')

    if(parts.length === 2){
        if(parts[0].length > 0 &&
           parts[1].length > 0 &&
           parts[1].includes('.') &&
           !parts[1].startsWith('.') &&
           parts[1].endsWith('.com')
        ){
            console.log("Valid format")
        }
        else{
            console.log("Invalid format")
        }
    }
    
    else{
        console.log("Invalid format")
    }

}
