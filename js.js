let inputEl = document.getElementById("Numberinput");
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");
let check6 = document.getElementById("check6");
let outputEL = document.getElementById("output-el");
let convertbtn = document.getElementById("convertbtn");

convertbtn.addEventListener("click", function () {
  if (!check1.checked && !check2.checked && !check3.checked) {
    alert("Please Select on of the Units");
  }
  let x = inputEl.value;
  if (check1.checked == true && check4.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p> ${x}m </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check1.checked == true && check5.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p> ${x * 100}cm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check1.checked == true && check6.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x * 1000}mm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check2.checked == true && check4.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x / 100}m </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check2.checked == true && check5.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x}cm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check2.checked == true && check6.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x * 10}mm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
  if (check3.checked == true && check4.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x / 1000}m </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }

  if (check3.checked == true && check5.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x / 10}cm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }

  if (check3.checked == true && check6.checked == true) {
    if (x != "") {
      outputEL.innerHTML = `<p>  ${x}mm </p>`;
      x = "";
    } else {
      alert(" please write a number to convert");
    }
  }
});
