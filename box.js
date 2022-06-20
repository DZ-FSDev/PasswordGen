var password = document.getElementById("password");

function genPassword(passwordLength = 12, strength = 'basic')
{
    let charSet = {
        basic: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        weak: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        moderate: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        strong: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    let password = "";

    for(let i = 0; i <= passwordLength; i++)
    {
        let randomNumber = Math.floor(Math.random() * charSet[strength].length);
        password += charSet[strength].substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = password;
}

function copyPassword()
{
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}