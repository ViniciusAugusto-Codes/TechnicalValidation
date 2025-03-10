function checkNumber(number) {
    let result = `The number ${number} is `;
    
    if (number > 0) {
        result += "positive";
    } else if (number < 0) {
        result += "negative";
    } else {
        result += "zero";
    }
    
   
    result += number % 2 === 0 ? ", even" : ", odd";
    
 
    result += number % 3 === 0 ? " and divisible by 3." : " and not divisible by 3.";
    
    console.log(result);
}


const userNumber = parseInt(prompt("Enter a number:"));
checkNumber(userNumber);