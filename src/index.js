module.exports = function toReadable(number) {
  let res = [];
  let numStr = number.toString();
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 20) {
    return ones[number];
  }

  if (number >= 20 && number < 100 && number % 10 == 0) {
    return tens[number / 10];
  }

  if (numStr.length == 2) {
    return tens[+numStr[0]] + ' ' + ones[+numStr[1]];
  }

  if (numStr.length == 3) {
    if (numStr[1] == 0 && numStr[2] == 0) {
      return ones[+numStr[0]] + " " + "hundred";
    } else {
      return ones[+numStr[0]] + " hundred " + toReadable(+(numStr[1] + numStr[2]));
    }
  }

};
