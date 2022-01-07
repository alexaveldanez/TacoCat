
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let resultsObj = checkForPalindrome(userString);

    displayMessage(resultsObj);
}

function checkForPalindrome(userString) {

    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let resultsObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        resultsObj.msg = "You entered a Palindrome!";
    } else {
        resultsObj.msg = "You did not enter a Palindrome!"
    }

    resultsObj.reversed = revString;

    return resultsObj;
}

function displayMessage(resultsObj) {
    document.getElementById("alertHeader").innerHTML = resultsObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${resultsObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}