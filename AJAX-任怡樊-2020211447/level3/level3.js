// 传入最基本的配置，会合并之后调用方法时传入的配置
function Ajax() {
    let ajax = new Object();
    ajax.get = function (url, data) {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.ontimeout = function () {
            alert("网络异常，请稍后再试......");
        }

        ajax.onerror = function () {
            alert("你的网络似乎出现了一些问题......🤡");
        }

        ajax.setRequestHeader = data.headers;

        ajax.send();
        ajax.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    data.success(JSON.parse(this.response));
                } else {
                    data.error();
                }
            }
        }
    }

    ajax.post = function (url, data) {
        let ajax = new XMLHttpRequest();
        ajax.open("POST", url);
        ajax.ontimeout = function () {
            alert("网络异常，请稍后再试......");
        }

        ajax.onerror = function () {
            alert("你的网络似乎出现了一些问题......🤡");
        }

        ajax.setRequestHeader = data.headers;

        ajax.send(data.value);
        ajax.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    data.success(JSON.parse(this.response));
                } else {
                    data.error(this.status);
                }
            }
        }
    }
    return ajax;
}

//设置请求信息
let data = {
    value: JSON.stringify({
        // 传递参数
        name: "renyf",
        age: 18
    }),
    headers: {
        // 设置请求头
        name: "renyf",
        age: 18
    },
    success: (res) => {
        /* some codes to handle data */
        dealData(res.result.songs);
    },
    error: (reason) => {
        /* some codes to handle error */
        console.log(reason);
    },
}

btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        input.value = "";
        alert("你还没有输入内容哦！！！😎");
    } else {
        result.innerHTML = "";
        const url = "http://cloud-music.pl-fe.cn/cloudsearch?limit= 20&keywords= " + input.value;
        const ajax = new Ajax();
        // ajax.get(url, data);
        ajax.post(url, data);
    }

})