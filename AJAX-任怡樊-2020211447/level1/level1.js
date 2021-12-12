let xhr = null;
let isSending = false;
btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        input.value = "";
        alert("你还没有输入内容哦！！！😎");
    } else {
        result.innerHTML = '';
        if (isSending) xhr.abort(); //如果正在发送 就 取消本次的请求

        xhr = new XMLHttpRequest();

        isSending = true;

        xhr.ontimeout = function () {
            alert("网络异常，请稍后再试......");
        }

        xhr.onerror = function () {
            alert("你的网络似乎出现了一些问题......🤡");
        }
        xhr.open("POST", "http://cloud-music.pl-fe.cn/cloudsearch?keywords= " + input.value + "&limit= 20");

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    let data = JSON.parse(this.response);
                    console.log(data);
                    dealData(data.result.songs);
                    isSending = false;
                }
            }
        }
    }
})
