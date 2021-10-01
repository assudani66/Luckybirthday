const dateinput = document.querySelector("#date-input")
const numberinput = document.querySelector("#number-input")
const checkbutton = document.querySelector("#check-button")
const message = document.querySelector("#message")


function sumdate(dob){
    dob = dob.replaceAll("-","")
    let sum = 0
    for(i=0; i<dob.length ;i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}

checkbutton.addEventListener("click", function luckanalyzer(){
    bday = sumdate(dateinput.value)
    if(bday%numberinput.value === 0){
        console.log("You have lucky birthday");
        message.innerText = "You have lucky birthday"
    }else{
        console.log("Luck is nothing 'saab moh maya hai'")
        message.innerText = "Luck is nothing 'saab moh maya hai'"
    }

})