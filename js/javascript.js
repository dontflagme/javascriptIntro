/*
 *Bean counting
 *You can get the Nth caharacter, or letter, from a string by wriing "string".charAt(N), similar to how you get it's
 *length with "s".length. The return value will be a string containing only one character (for example, "b") The first character has position zero, which causes
 *the last one to be found at position String.length -1. In other words, a two-character string has length 2, and it's characters have positions 0 and 1.
 *
 * Write a function countBs that takes a string as it's only argument and returns a number that indicates how many uppercase "B" character are in the string
 *
 *  Next write a function called countChar that behaves like countBs, except it takes a sound argument that indicates the character that is to be counted (user chooses)
 *
 *
 *  Write a program that uses console.log to print all numbers fomr 1-100.
 *      -Numbers divisible by 3, print "Fizz"
 *      -Numbers divisible by 5 and not 3 print "Buzz".
 *      -When it is working, numbers divisible by 3 and 5 print "FizzBuzz'.
 */

document.write("Intro to java script");
countBs();


function countBs(){
    var word = "Bat";
    var letterCount = 0;
    for(var i = 0; i < word.length; i++){
       var letter = word.charAt(i);
       if(letter == "B"){
            letterCount++;
       }
    }
    
    document.write("The amount of B's in here: " + letterCount);
    console.log("The amount of B's in here: " + letterCount);
}





//countBs(inputWord, inputLetter);