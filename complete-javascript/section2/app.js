/**
 * CHALLENGE ONE
 */
/*
var markHeight = 1.89; // heightMark
var johnHeight = 1.76; // heightJohn

var markMass = 81; // massMark
var johnMass = 77; // massJohn

var markBMI = markMass / (markHeight * markHeight); // BMIMark
var johnBMI = johnMass / (johnHeight * johnHeight); // BMIJohn

var higherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log("Is Mark's BMI higher than John's?" + higherBMI);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
*/

/**
 * CHALLENGE TWO
 */
/*
var johnTeamScore = (89 + 120 + 103) / 3;
var mikeTeamScore = (116 + 94 + 123) / 3;
var maryTeamScore = (97 + 134 + 105) / 3;

console.log(
  "John " + johnTeamScore,
  "Mike " + mikeTeamScore,
  "Mary " + maryTeamScore
);

// if (johnTeamScore != (mikeTeamScore && maryTeamScore)) {
if (johnTeamScore > (mikeTeamScore && maryTeamScore)) {
  console.log(johnTeamScore + ": John has the highest average score");
} else if (mikeTeamScore > (johnTeamScore && maryTeamScore)) {
  console.log(mikeTeamScore + ": Mike has the highest average score");
} else if (maryTeamScore > (johnTeamScore && mikeTeamScore)) {
  console.log(maryTeamScore + ": Mary has the highest average score");
} else {
  console.log("it is a draw");
}
// } else {
//   console.log("Both teams have a draw");
// }
*/

/**
 * Challenge 3
 */

/*
var tipArr = [];
var totalArr = [];
var tipResult;

function calculateTip(amount) {
  if (amount < 50) {
    tipResult = amount * 0.2;
    tipArr.push(tipResult);
    totalArr.push(amount + tipResult);
  } else if (amount >= 50 && amount < 200) {
    tipResult = amount * 0.15;
    tipArr.push(tipResult);
    totalArr.push(amount + tipResult);
  } else {
    tipResult = amount * 0.1;
    tipArr.push(tipResult);
    totalArr.push(amount + tipResult);
  }
  console.log(tipArr, totalArr);
}

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Answer", tips, finalValues);

calculateTip(124);
calculateTip(48);
calculateTip(268);

*/
/*
var john = {
  name: "john",
  mass: 78,
  height: 1.8,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  name: "mark",
  mass: 81,
  height: 1.7,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();

console.log(john);
console.log(mark);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.name + " has a larger BMI of " + john.bmi);
} else if (john.bmi < mark.bmi) {
  console.log(mark.name + " has a larger BMI of " + mark.bmi);
} else {
  console.log("The bmi is the same");
}

*/

/**
 * Challenge 4
 */

var johnTip = {
  fullName: "John Smith",
  bill: [124, 48, 268, 180, 42],
  tip: [],
  total: [],
  calcTip: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        var result = this.bill[i] * 0.2;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        var result = this.bill[i] * 0.15;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      } else {
        var result = this.bill[i] * 0.1;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      }
    }
  }
};

johnTip.calcTip();
console.log(johnTip);

var markTip = {
  fullName: "Mark Jones",
  bill: [77, 375, 110, 45],
  tip: [],
  total: [],
  calcTip: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        var result = this.bill[i] * 0.2;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        var result = this.bill[i] * 0.1;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      } else {
        var result = this.bill[i] * 0.25;
        this.tip.push(result);
        this.total.push(result + this.bill[i]);
      }
    }
  }
};

markTip.calcTip();
console.log(markTip);

function calcAvGTip(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

var totalJohn = calcAvGTip(johnTip.tip);
var totalMark = calcAvGTip(markTip.tip);
console.log(totalJohn);
console.log(totalMark);

if (totalJohn > totalMark) {
  console.log("John's family paid highest tip: " + totalJohn);
} else if (totalJohn < totalMark) {
  console.log("Mark's family paid highest tip: " + totalMark);
} else {
  console.log("They paid the same");
}

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.calcTips();
console.log(john);

var marc = {
  fullName: "Marc Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

marc.calcTips();
console.log(marc);

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.average = calcAverage(john.tips);
marc.average = calcAverage(marc.tips);

john.calcTips();
marc.calcTips();

if (john.average > marc.average) {
  console.log("John's family paid highest tip: " + totalJohn);
} else if (john.average < marc.average) {
  console.log("Mark's family paid highest tip: " + totalMark);
} else {
  console.log("They paid the same");
}
