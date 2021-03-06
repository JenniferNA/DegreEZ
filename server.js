/*
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/url"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
*/

const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require("pdf-parse");


const app = express();
app.use(fileUpload());


// Upload Endpoint
/*
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  file.mv(`${__dirname}/server/uploads/Audit.pdf`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/server/uploads/Audit.pdf` });
  });
  
});
*/
app.post('/extract-text', (req, res) => {
  if (!req.files && !req.files.pdfFile) {
      res.status(400);
      res.end();
  }
  pdfParse(req.files.pdfFile).then(result => {
      res.send(result.text);
  });
});


app.listen(5000, () => console.log('Server Started...'));


