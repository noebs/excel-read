const express = require('express');
const readXlsxFile = require('read-excel-file/node')
const path = require('path')
const basicAuth = require('express-basic-auth')
const schema = require('./schema')
const multer = require('multer')

const port = process.env.port || 8080;
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, "current.xlsx");
    }
});

const imageUpload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (file.mimetype == "application/vnd.ms-excel" || file.mimetype == "application/xls" || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .xls and .xlsx format allowed!'));
        }
    }
})

app.get('/api', async (req, res) => {

    const data = await readXlsxFile("./upload/current.xlsx", { schema }).then(({ rows, errors }) => {
        errors.length === 0
        return rows
    })

    res.send(data);
});


app.use(basicAuth({
    challenge: true,
    users: { 'admin': 'admin' }
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/upload', imageUpload.single('file'), (req, res) => {
    res.status(200).send(done);
})


app.listen(port, () => {
    console.log(`excel app listening on ${port} port!`);
});

//Run app, then load http://localhost:port in a browser to see the output.