// jshint esversion: 7

//req 3a
let revWords1 = (s) => {
  let splitString = s.split(" ");
  let finalString = [];
  for (var i = 0; i < splitString.length; i++) {
    let word = splitString[i].split("");
    finalString.push(word.reverse().join(""));
  }
  return finalString.join(" ");
};

//req 3b
let revWords2 = (s) => {
  let splitString = s.split(" ");
  let finalString = [];
  let reverse = (word) => {
    let revWord = word.split("").reverse().join("");
    finalString.push(revWord);
  };
  splitString.forEach(reverse);
  return finalString.join(" ");
};

//req 3c
let revWords3 = (s) => {
  let splitString = s.split(" ");
  let finalString = [];
  for (let word of splitString) {
    let revWord = word.split("").reverse("").join("");
    finalString.push(revWord);
  }
  return finalString.join(" ");
};

//extra credit
let containsDuplicates = (s) => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
