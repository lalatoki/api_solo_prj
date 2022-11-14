const express = require("express");
// const secsRouter = require("./routes/secretary"); //secretary
const secsRouter = require("./routes/sec"); //secretary
const mobsRouter = require("./routes/mob");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// ーーーーーーー検証ブロックーーーーーーー
// app.get("/", (req, res) => {
//     console.log("hello");
//     // res.send("<h1>hello test</h1>");
//     // res.sendStatus(500);
//     // res.status(404).send("error");
//     res.json({msg : "jsontext"});
// })
// ーーーーーーー検証ブロックーーーーーーー

// routing
app.use("/api/secs", secsRouter);
app.use("/api/mobs", mobsRouter);


app.listen(PORT, () => console.log("server running!"));




