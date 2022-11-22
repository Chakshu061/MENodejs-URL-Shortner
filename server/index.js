const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require('morgan');


const app = express();

app.use(helmet());
app.use(morgan());
app.use(cors());
app.use(cors());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.json({
    message: 'cdg.sh - Short Urls for your code garden'
  });
});

//app.get('/url/:id', (req, res) => {
//    //TODO: get a short URL by id
//});
//
//
//app.get('/:id', (req, res) => {
//    //TODO: redirect to uRL
//});
//
//app.post('/url', (req, res) => {
//    //TODO: create a short URL
//});

const port = process.env.PORT || 1337;
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`);
})