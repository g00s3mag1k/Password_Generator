let passwordInput = document.getElementById("passwordInput");
let passGenerateBtn = document.getElementById("passGenerateBtn");
let generatedPasswordShow = document.getElementById("showGeneratedPassword");
let copyPasswordBtn = document.getElementById("copyPasswordBtn");
let lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbolsArr = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '<', '>', '?', '@', '[', ']', '^', '_', '`', '|', '~']

let passwordLength = 0;
let checkboxData = {
    number: true,
    lower: true,
    upper: true,
    symbol: true
}
let generatedPasswordCopy = "";

passwordInput.addEventListener("input", ({ target }) => passwordLength = +target.value);
passGenerateBtn.addEventListener("click", () => generatePassword());
copyPasswordBtn.addEventListener("click", () => {
    var copyText = document.getElementById("copyPasswordBtn");
    if (!generatedPasswordCopy) {
        alert("Password not created yet!");
        return;
    }
    // generatedPasswordCopy.select();
    // generatedPasswordCopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generatedPasswordCopy);
    alert("Copied the text: " + generatedPasswordCopy);
    return;
});

function toggleCheckBox({ target }) {
    checkboxData[target.id] = target.checked
}

function generatePassword() {
    let { number, lower, upper, symbol } = checkboxData;
    let newPassword = "";

    if (passwordLength < 6) {
        alert("password length should be atleast 6");
        return;
    }

    if (!number && !lower && !upper && !symbol) {
        alert("Please select atleast 1 parameter!");
        return;
    }

    while (newPassword.length < passwordLength) {
        let addedChar = false;
        while (!addedChar) {
            let decision = Math.floor(Math.random() * 4);

            if (decision == 0 && number) {
                let index = Math.floor(Math.random() * numbersArr.length)
                addedChar = true;
                newPassword += numbersArr[index];
                break;
            }
            if (decision == 1 && lower) {
                let index = Math.floor(Math.random() * lettersArr.length)
                addedChar = true;
                newPassword += lettersArr[index].toLowerCase();
                break;
            }
            if (decision == 2 && upper) {
                let index = Math.floor(Math.random() * lettersArr.length)
                addedChar = true;
                newPassword += lettersArr[index].toUpperCase();
                break;
            }
            if (decision == 3 && symbol) {
                let index = Math.floor(Math.random() * symbolsArr.length)
                addedChar = true;
                newPassword += symbolsArr[index];
                break;
            }
        }
    }
    generatedPasswordCopy = newPassword;
    generatedPasswordShow.innerText = newPassword;
    return;
}
