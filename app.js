const express = require('express');
const bodyParser = require('body-parser');
const ejs =require('ejs');
const path = require('path');
const dotEnv = require('dotenv');
const app  = express ();
global.__rootdir = __dirname;
//configure app;
dotEnv.config();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
// middleware set
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
module.exports =app;