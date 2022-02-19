let express = require("express");

let app = express();

let session = require("express-session");

app.use(express.static("./public"))

app.use("*", function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.post("/login", function (req, res) {
    let str = "";
    req.on("data", function (chunk) {
        str += chunk;
    });
    req.session.islogin = false;

    req.on("end", function () {
        console.log(JSON.parse(str));
        str = JSON.parse(str);
        console.log(str.useremail);
        if (str.useremail === "123" && str.password === "123") {
            res.send('ok');
            req.session.islogin = true;

        } else {
            res.send("")
        }
    });
})

app.get("/user", function (req, res) {
    let pass = req.session.islogin;
    
    if (pass) {
        res.send('ok')
    } else {
        res.send('')
    }
})
app.listen(3000, () => {
    console.log("服务器启动成功！！！！");
});