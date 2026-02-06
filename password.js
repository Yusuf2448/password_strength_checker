let password = document.getElementById("password");
let bar = document.getElementById("strengthBar");
let text = document.getElementById("strengthText");

password.addEventListener("input", function () {
    let pass = password.value;
    let strength = 0;

    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;

    if (strength <= 2) {
        bar.style.width = "33%";
        bar.style.background = "red";
        text.innerText = "Weak Password";
    }
    else if (strength <= 4) {
        bar.style.width = "66%";
        bar.style.background = "orange";
        text.innerText = "Medium Password";
    }
    else {
        bar.style.width = "100%";
        bar.style.background = "green";
        text.innerText = "Strong Password";
    }
});
