function palindrome() {
  var str = document.getElementById("toConvert").value;
  const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const strArr = filteredStr.split("");
  let newStr = "";
  
  if (str === "") {
    window.alert("Please enter some text!");
    return;
  }

  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i]
  }

  if (filteredStr === newStr) {
    document.getElementById("answerDiv").style.display = "block";
    return document.getElementById("answer").innerHTML = "Palindrome";
  } else {
    console.log(false, "NEM, Palindrome")
    document.getElementById("answerDiv").style.display = "block";
    return document.getElementById("answer").innerHTML = "Not Palindrome";
  }
}

document.getElementById("convert").onclick = function () { palindrome(); };
document.getElementById("answerDiv").style.display = "none";
