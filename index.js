import express from 'express';
const app = express();


const Students = [
    "fatma",
    "rashad",
    "ali",
    "mansour",
]
const list = (req, res) => {
    let output = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        output += "<li>" + Students[i] + "</li>";
    }
    output += "</ul>"
    res.send(output)
}


app.get("/students", list);
app.listen(5000);




