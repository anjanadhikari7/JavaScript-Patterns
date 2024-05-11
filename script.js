let pattern1 = document.getElementById("pattern-1");
let pattern2 = document.getElementById("pattern-2");
let pattern3 = document.getElementById("pattern-3");
let pattern4 = document.getElementById("pattern-4");
let pattern5 = document.getElementById("pattern-5");
let pattern6 = document.getElementById("pattern-6");
let pattern7 = document.getElementById("pattern-7");
let pattern8 = document.getElementById("pattern-8");
let pattern9 = document.getElementById("pattern-9");
let pattern10 = document.getElementById("pattern-10");
let pattern11 = document.getElementById("pattern-11");
let pattern12 = document.getElementById("pattern-12");
let pattern13 = document.getElementById("pattern-13");
let pattern14 = document.getElementById("pattern-14");
let pattern15 = document.getElementById("pattern-15");
let pattern16 = document.getElementById("pattern-16");
let pattern17 = document.getElementById("pattern-17");
// Pattern-1 || Square Hollow Pattern
for (let i = 0; i <= 5; i++) {
  let pattern = "";
  for (let j = 0; j <= 5; j++) {
    if (i === 0 || i === 5 || j === 0 || j === 5) {
      pattern += "*";
    } else {
      pattern += "&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern1.innerHTML += pattern; // Use += to append each row
}
//********** */

// Pattern-2 || Number Triangular Pattern

for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (j = 1; j <= 6 - i; j++) {
    pattern += "&nbsp;&nbsp";
  }
  for (k = 1; k <= i; k++) {
    pattern += i + "&nbsp;";
  }
  pattern += "<br>";
  pattern2.innerHTML += pattern;
}

///******** */
// Number-increasing Pyramid Pattern
for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (j = 1; j <= i; j++) {
    pattern += j + "&nbsp;&nbsp";
  }

  pattern += "<br>";
  pattern3.innerHTML += pattern;
}
///******** */

// Number-increasing Reverse Pyramid Pattern
for (let i = 6; i >= 1; i--) {
  let pattern = "";
  for (j = 1; j <= i; j++) {
    pattern += j + "&nbsp;&nbsp";
  }

  pattern += "<br>";
  pattern4.innerHTML += pattern;
}
///******** */
//Number-changing Pyramid Pattern
let num = 1;
for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (j = 1; j <= i; j++) {
    pattern += num + "&nbsp;&nbsp";
    num++;
  }

  pattern += "<br>";
  pattern5.innerHTML += pattern;
}
//*********** */
//Zero-One Triangle Pattern

for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (j = 1; j <= i; j++) {
    let k = (i + j) % 2;
    if (k === 0) {
      pattern += "1" + "&nbsp;&nbsp";
    } else {
      pattern += "0" + "&nbsp;&nbsp";
    }
  }

  pattern += "<br>";
  pattern6.innerHTML += pattern;
}
//******** */
//Palindrome Triangle Pattern
for (let i = 1; i <= 6; i++) {
  let pattern = "";

  //Inner loop for space
  for (let j = 1; j <= 2 * (6 - i); j++) {
    pattern += "&nbsp;&nbsp";
  }
  // loop for first part
  for (let j = i; j >= 1; j--) {
    pattern += j + "&nbsp;&nbsp";
  }
  //loop for 2nd part
  for (let j = 2; j <= i; j++) {
    pattern += j + "&nbsp;&nbsp";
  }
  pattern += "<br>";
  pattern7.innerHTML += pattern;
}
///************* */
// Rhombus Pattern
for (let i = 1; i <= 6; i++) {
  let pattern = "";
  for (let j = 1; j <= 6 - i; j++) {
    pattern += "&nbsp;&nbsp";
  }

  for (let j = 1; j <= 6; j++) {
    pattern += "* ";
  }
  pattern += "<br>";
  pattern8.innerHTML += pattern;
}

/// Diamond star pattern *******/
//upper part
for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (j = 1; j <= 4 - i; j++) {
    pattern += "&nbsp;&nbsp;";
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "<br>";
  pattern9.innerHTML += pattern;
}

//lower part
for (let i = 3; i >= 1; i--) {
  let pattern = "";
  for (j = 1; j <= 4 - i; j++) {
    pattern += "&nbsp;&nbsp;";
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "<br>";
  pattern9.innerHTML += pattern;
}

//************ */
// Butterfly pattern
// TOP Section
for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  // Calculate spaces after first set of asterisks
  let space = 2 * (4 - i);
  for (let j = 1; j <= space; j++) {
    pattern += "&nbsp;&nbsp;";
  }

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "<br>";
  pattern10.innerHTML += pattern;
}

// Bottom Section
for (let i = 4; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  // Calculate spaces after first set of asterisks
  let space = 2 * (4 - i);
  for (let j = 1; j <= space; j++) {
    pattern += "&nbsp;&nbsp;";
  }

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "<br>";
  pattern10.innerHTML += pattern;
}

//************* */
//Right Half Pyramid Pattern

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "<br>";
  pattern11.innerHTML += pattern;
}

//********** */
//Right Half Pyramid Pattern Reverse

for (let i = 5; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "<br>";
  pattern12.innerHTML += pattern;
}
//*********** */

// Nepal Flag pattern
// First Triangle
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    if (j === i || j === 1 || i === 5) {
      pattern += "* ";
    } else {
      pattern += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern13.innerHTML += pattern;
}
//Second triangle
for (let i = 2; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    if (j === i || j === 1 || i === 5) {
      pattern += "* ";
    } else {
      pattern += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern13.innerHTML += pattern;
}
// Stand line
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  pattern += "*";
  pattern += "<br>";
  pattern13.innerHTML += pattern;
}
//************ */

// Hollow Triangle pattern

for (let i = 1; i <= 5; i++) {
  pattern = "";
  for (j = 1; j <= 5 - i; j++) {
    pattern += "&nbsp;&nbsp;";
  }
  let space = 2 * i - 1;
  for (k = 1; k <= space; k++) {
    if (k === 1 || k === space || i === 5) {
      pattern += "*";
    } else {
      pattern += "&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern14.innerHTML += pattern;
}
//************ */

// Hollow Diamond Pyramid
// Top part
for (let i = 1; i <= 5; i++) {
  pattern = "";
  for (j = 1; j <= 5 - i; j++) {
    pattern += "&nbsp;&nbsp;";
  }
  let space = 2 * i - 1;
  for (k = 1; k <= space; k++) {
    if (k === 1 || k === space) {
      pattern += "*";
    } else {
      pattern += "&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern15.innerHTML += pattern;
}
// Bottom Part
for (let i = 5; i >= 1; i--) {
  pattern = "";
  for (j = 1; j <= 5 - i; j++) {
    pattern += "&nbsp;&nbsp;";
  }
  let space = 2 * i - 1;
  for (k = 1; k <= space; k++) {
    if (k === 1 || k === space) {
      pattern += "*";
    } else {
      pattern += "&nbsp;&nbsp;";
    }
  }
  pattern += "<br>";
  pattern15.innerHTML += pattern;
}

// Pascal's Triangle

// for (let i = 0; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 0; j <= 4 - i; j++) {
//     pattern += "&nbsp;&nbsp;";
//   }
//   let x = 1;
//   for (let k = 0; k <= i; k++) {
//     if (k > 0) {
//       x = (x * (i - k + 1)) / k;
//     }
//     pattern += x + "&nbsp;&nbsp;";
//   }
//   pattern += "<br>";
//   pattern16.innerHTML += pattern;
// }

//************** */
//Right Pascal's Triangle
//************** */
