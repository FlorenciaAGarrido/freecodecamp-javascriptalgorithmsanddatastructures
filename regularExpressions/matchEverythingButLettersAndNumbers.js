let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; 
let result = quoteSample.match(nonAlphabetRegex).length;