// 一堆获取元素
const pic = Getelm(".wea_pic");
const city = Getelm(".city");
const btn = Getelm(".search_btn");
const back = Getelm(".return");
const search_page = Getelm(".search_page");
const input = Getelm(".input");
const now_wea = Getelm(".now_wea");
const info_wea = Getelm(".info_wea");
const info_wind = Getelm(".info_wind");
const air_now = Getelm(".air_now");
const warn_2 = Getelm(".warn_2");
const air_bgc = Getelm(".air_bgc");
const today = Getelm(".today");
const today_du = Getelm(".today_du");
const tom_du = Getelm(".tom_du");
const tom = Getelm(".tom");
const day_wea = Getelm(".day_wea");
const left_img = Getelm(".left_img");
const right_img = Getelm(".right_img");
const riluo = Getelm(".riluo");
const hot_city = Getelm(".hot_city");
const success_search = Getelm(".success_search");
const his = Getelm(".his");
const lis = hot_city.querySelectorAll("li");
const dle = Getelm(".his_dle");


let flag = true;
const ajax = new Ajax();

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
    success: (res, fun) => {
        /* some codes to handle data */
        fun(res);
    },
    error: (reason) => {
        /* some codes to handle error */
        console.log(reason);
    },
}

// 搜索页面显示点击事件
addEventListener(btn, 'click', DisplayPage);
addEventListener(back, 'click', DisplayPage);

// 搜索按钮事件
addEventListener(success_search, "click", function () {
    if (input.value.trim() === '') {
        alert("请输入内容哦!!!!!😛");
    } else {
        const search_city = input.value;
        ajax.get('https://geoapi.qweather.com/v2/city/lookup?&key=75b241a3acb942a7bf10b9b42ef8e046&location=' + search_city, data, CityWea);
        if (flag) {
            let li = create("li");
            li.innerHTML = search_city + "市";
            addEventListener(li, "click", function () {
            city.innerHTML = li.innerHTML;
            search_page.style.display = "none";
            ajax.get('https://geoapi.qweather.com/v2/city/lookup?&key=75b241a3acb942a7bf10b9b42ef8e046&location=' + li.innerHTML, data, CityWea);
        });
            his.appendChild(li);
            search_page.style.display = "none";
            
        }
    }
    input.value = "";
})

// 获取手机键盘搜索按钮
$(".input").keypress(function (e) {
    if (e.keyCode === 13) {
        $(".success_search").click();
    }
});

// 历史记录删除
addEventListener(dle, "click", function () {
    his.innerHTML = "";
})

// 初始信息获取
Dealhotcity(lis);
ajax.get('https://devapi.qweather.com/v7/weather/7d?&key=75b241a3acb942a7bf10b9b42ef8e046&location=101040100', data, DealDays);
ajax.get('https://devapi.qweather.com/v7/air/now?&key=75b241a3acb942a7bf10b9b42ef8e046&location=101040100', data, DealNowAir);
ajax.get('https://devapi.qweather.com/v7/weather/now?&key=75b241a3acb942a7bf10b9b42ef8e046&location=101040100', data, DealNowWea);










