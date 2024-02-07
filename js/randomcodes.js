/*--Random codes--*/

/*function to generate combination of charcters*/

function generateCode(){
//create variables to store genersted codes and the type of characters we want to show as codes//
var code = ' ';//inialize to null value//
var getCode = ' ';//to store entered code
var btnvalue; // for button boolean value
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
//generate characters multiple times using loop
for (i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length); //random select charater from the variables the store in a new variable//
    code += str.charAt(char) //accumlate the generated character into a string of 8 characters
    
}
return code; //return the final accumlated string when loop ends
}
//get HTML element to display
document.getElementById("code").innerHTML = generateCode();

// determin when to didable button//
function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue; //able/disable button
    if (btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").styleColor = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered");//get textbox
codebox.addEventListener("input", evaluateCode);//listen to code entered
function evaluateCode(){
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //if match, run the function to enable button 
   }else {
    disableButton(true);
   }
}

//display all 6 images codes stored in the array
document.getElementById("partners").innerHTML = imageList;