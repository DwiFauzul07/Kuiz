import express from "express";

const app = express();

//middleware
app.use((req, res, next) => {
    console.log("ada request masuk");
    next();
});

//route
app.get("/api/salam",(_req, res) => {
    res.send("Assalamualaikum Mazz!!!");
});

app.listen(3000, () => {
    console.log("Berhasil Jalan");
});