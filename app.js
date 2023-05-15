//===================================Assignment # 7 JAVASCRIPT Chapter(12-13)======================//
//======================JAVASCRIPT IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS===========================//



//Q1:Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, 
//uppercase letter or lowercase letter.(Hint:ASCII codes:- A=65,Z=90,a==97,z=122)
//Ans:


//Q2:Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
//Ans:
// var integer1 = +prompt( "Write here an integer" );
// var integer2 = +prompt( "Write here another integer" );
// if (integer1 > integer2){
//     document.write( integer1 + " is greater than " + integer2 + "<br>" );    
// }
// else if(integer2 > integer1){
//     document.write( integer2 + " is greater than " + integer1 + "<br>" );
// }
// else if(integer1 = integer2){
//     document.write( "Both integers are equal." );
// }
// else{
//     alert( "Please enter the integers." );
// }



//Q3:Write a program that takes input a number from user & state whether the number is positive, negative or zero.
//Ans:
// var number = +prompt( "Please enter a number." );
// if(number > 0){
//     document.write( "Your entered number is positive." + "<br>" );
// }
// else if(number < 0){
//     document.write( "Your entered number is negative." + "<br>" );
// }
// else{
//     alert( "Please enter a number!" );
// }



//Q4:Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
//Ans:
// var character = prompt("Enter a character:");
// if(character == "a" || character == "A" || character == "e" || character == "E" || character == "i" || character == "I" || character == "o" || character == "O" || character == "u" || character == "U"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }



//Q5: Write a program that:
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password.”
//ii. Check if both passwords are same. If they are same, show message “Correct!
//The password you entered don't matches the original password”. Show “Incorrect password” otherwise.
//Ans:
// var correctPassword = "AsmaAli";
// var Password = prompt( "Enter your password" );
// if(Password == ""){
//     alert( "“Please enter your password.”" );
// }
// else if(Password == correctPassword){
//     alert( "“Correct!" );
// }
// else{
//     alert( "incorrect password." );
// }



//Q6: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//Ans:
// var hour = +prompt( "Write here hours" );
// if( hour < 18 ){
//     document.write( "Good Day" );
// }
// else{
//     document.write( "Good Evening" );
// }



//Q7:Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//Ans:
var time = +prompt("Write here time.");
if(time >= 00 && time < 12){
    document.write("Good Morning.");
}
else if(time >= 12 && time < 17){
    document.write("Good Afternoon.");
}
else if(time >=17 && time < 21){
    document.write("Good Evening.");
}
else{
    document.write("Good Night.");
}




//===============================================Chapters (12-13) completed=====================================//