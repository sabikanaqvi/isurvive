var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
    "host": "localhost",
  "port": 5432,
  "database": "postgres",
  "user": "postgres",
  "password": "3105"
};
var db = pgp(connectionString);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});


app.listen(8080);

app.get('/api/get-hos', function(req,res,next){
    console.log("hello");
    db.any('SELECT * FROM sabika')
        .then(function(data){
            if(data){
                
                
            }
            res.json(data);
        });
});