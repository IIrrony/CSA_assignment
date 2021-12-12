//获取元素
const input = document.querySelector("#search");
const btn = document.querySelector("button");
const result = document.querySelector("ul");

//处理数据
function dealData(data) {
    data.forEach((elm, index) => {
        let li = create("li");
        let div1 = create("div");
        let div2 = create("div");
        let div3 = create("div");
        let div4 = create("div");
        let a1 = create("a");
        let a2 = create("a");
        let a3 = create("a");
        div1.className = "index";
        div2.className = "title";
        div3.className = "zhuanji";
        div4.className = "singer";
        li.setAttribute("background-color", "#f3f2f2");
        a1.setAttribute("href", "javascript:;");
        a2.setAttribute("href", elm.al.picUrl);
        a2.setAttribute("target", "_blank");
        a3.setAttribute("href", "javascript:;");
        div1.innerHTML = index + 1;
        a1.innerHTML = elm.name;
        a2.innerHTML = "《" + elm.al.name + "》";
        a3.innerHTML = elm.ar[0].name
        div2.appendChild(a1);
        div3.appendChild(a2)
        div4.appendChild(a3);
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
        li.appendChild(div4);
        result.appendChild(li);
        const lis = document.querySelectorAll("li");
        lis.forEach((elm, index) => {
            index % 2 ? elm.style.backgroundColor = "#fff" : elm.style.backgroundColor = "#f3f2f2";
        })
    })
}

//创建元素
function create(atr) {
    return document.createElement(atr);
}

// Jquery 按回车出发点击事件
$("#search").keydown(function (e) {
    if (e.keyCode === 13) {
        $("#btn").click();
    }
});
