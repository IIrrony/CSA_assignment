btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        input.value = "";
        alert("你还没有输入内容哦！！！😎");
    } else {
        ajax_tool("POST", "http://cloud-music.pl-fe.cn/cloudsearch?limit= 20&keywords= " + input.value, {
            name: "renyf",
            age: 18
        });
    }
})

function ajax_tool(type, url, data) {
    const ajax = new XMLHttpRequest();

    ajax.ontimeout = function () {
        alert("网络异常，请稍后再试......");
    }

    ajax.onerror = function () {
        alert("你的网络似乎出现了一些问题......🤡");
    }

    ajax.open(type, url);

    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    if (type === "POST") {
        ajax.send(JSON.stringify(data));
    } else {
        ajax.send();
    }

    ajax.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 300) {
                let data = JSON.parse(this.response).result.songs;
                dealData(data);
            }
        }
    }
}