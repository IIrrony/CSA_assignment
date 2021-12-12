function sendAjax(type, url, data) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(type, url);
        xhr.ontimeout = function () {
            alert("网络异常，请稍后再试......");
        }

        xhr.onerror = function () {
            alert("你的网络似乎出现了一些问题......🤡");
        }

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (type === "POST") {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(this.response).result.songs);
                } else {
                    reject(this.status);
                }
            }
        }
    })
}

btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        input.value = "";
        alert("你还没有输入内容哦！！！😎");
    } else {
        result.innerHTML = "";
        sendAjax("POST","http://cloud-music.pl-fe.cn/cloudsearch?limit= 20&keywords= " + input.value, {
                name: "renyf",
                age: 18
            })
            .then(value => {
                dealData(value);
            }, reason => {
                console.log(reason);
            })
    }
})