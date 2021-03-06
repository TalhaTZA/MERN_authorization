const express = require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const app=express();
const router=require('./router');
const mongoose=require('mongoose');
const cors=require('cors');


//DB SETUP
mongoose.connect('mongodb://localhost/auth',null,function(err){
    console.log(err);
});

//APP SETUP
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
router(app);

//SERVER SETUP
const port=process.env.PORT || 4000 ;
const server=http.createServer(app);
server.listen(port);
console.log('Server listening on port:'+port);