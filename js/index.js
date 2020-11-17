let number = null;
function inputBinary() {
  number = document.getElementById("binary");

  const test = testBin(number.value);
  number.value = test;
}

function testBin(number) {
  if (!/^[0-1]{1,8}$/.test(number) && number.length <= 8 && number != "") {
    window.alert("This number isn't a binary number, please try again!");
    return "";
  } else {
    return number.match(/[0-1]{0,8}/)[0];
  }
}

function outputDecimal() {
  document.getElementById("decimal").value = parseInt(number.value, 2);
}
