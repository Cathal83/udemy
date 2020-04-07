let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character where the dot goes
re = /h*llo/i; // Matches any charachter 0 or more times were asterisk is
re = /gre?a?y/i; // Optional character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be uppercase G or F
re = /[^GF]ray/i; // Matches anything but G or F. If ^ outside bracket it would be at start but inside that rule does not apply
re = /[A-Z]ray/; // Matches any uppercase letter
re = /[a-z]ray/; // Matches any lowercase letter
re = /[A-Za-z]ray/; // Matches any letter, any case
re = /[0-9]ray/; // Matches any digit
re = /[0-9][0-9]ray/; // Matches any two digit

// Braces {} - Quantifiers
re = /Hello/i;
re = /Hel{2}o/; // Matches two Ls. Matches {n} amount of times
re = /Hel{2,4}o/; //  Matches between {n,m} amount of times
re = /Hel{2,}o/; //  Must occur at least {n} amount of times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // Matches a number and x three times

// Shorthand Character Classes
re = /\w/; // Word Character - alpahnumeric or underscore. Matches first one
re = /\w+/; // Word Character - alpahnumeric or underscore. Matches one or more
re = /\W/; // Non Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 1 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace
re = /\S/; // match non-whitespace char
re = /Hell\b/i; // Word Boundary

// ASsertions
re = /x(?=y)/; // Match x only if followed by Y

// String to match
const str = "Hello and welcome to hell";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
