// Antonio Hernandez
// INF 651 
/* Practice Assignment 4:
// 10 - 3 - 22

/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".
function helloWorld() {
    return "Hello World!";  // returns the exact phrase
}
//console.log(helloWorld());
// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.
function greeting(name) {
    return "Hello, " + name;  // returns Hello with name we provide
}
//console.log(greeting("John"));
// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.
function divisibleByThree(number) {
    if (number % 3 == 0) {  // if divisible by 3 then returns true
        return true;
    }
    else {  // everything else returns false
        return false;
    }
}
//console.log(divisibleByThree(9));
// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
function averageAge(num1, num2, num3) {
    var average = 0;
    //average = (num1 + num2 + num3) / 3;
    if (num3 == null) {  // if num3 is missing 
        return Math.round((num1 + num2) / 2);
    }
    else {  // else returns the average of all three numbers
        return Math.round((num1 + num2 + num3) / 3);
    }
}
//console.log(averageAge(5, 10, 15));
// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.
function leetSpeak(word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "e") {  // replaces e with 3
            word = word.replace(word[i], "3");
        }
        else if (word[i] == "a") {  // replaces a with 4
            word = word.replace(word[i], "4");
        }
    }
    return word;  // result after converted
}
//console.log(leetSpeak("speak"));