/*--Random codes--*/

/*function to generate combination of charcters*/

function generateCode(){
//create variables to store genersted codes and the type of characters we want to show as codes//
var cade = ' ';//inialize to null value//
var str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
//generate characters multiple times using loop
for (i = 1; i<= 8; i++) {
    var char = Math.random()* str.length; //random select charater from the variables the store in a new variable//
    code += str.charAt(char) //accumlate the generated character into a string of 8 characters
}
}
return code; //return the final accumlated string when loop ends