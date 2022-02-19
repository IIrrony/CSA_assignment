const button = document.querySelector(".login_btn");
const email = document.querySelector(".email");
const psw = document.querySelector(".psw");
const a = document.querySelector("a");
const box = document.querySelector(".box");
const login = document.querySelector("button")

login.addEventListener("click", function () {
    box.style.display = "block";

    const xhr = new XMLHttpRequest();

    xhr.open("get", "http://127.0.0.1:3000/user")

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (this.status >= 200 && this.status < 300) {
                console.log(this.response);
                if (this.response === "ok") {
                    a.click();
                }
            }
        }
    }
})

button.addEventListener("click", function () {
    if (email.value.trim() === "" || psw.value.trim() === "") {
        alert("Please input email and psw!!!");
    } else {
        const xhr = new XMLHttpRequest();
        const data = {
            useremail: email.value,
            password: psw.value
        }
        console.log(email.value);
        xhr.open("post", "http://127.0.0.1:3000/login")

        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    console.log(this.response);
                    if (this.response === "ok") {
                        a.click();
                    } else {
                        email.value = ''
                        psw.value = ''
                        alert("Please input correct email or psw!!!")
                    }
                }
            }
        }
    }

})