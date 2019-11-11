const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Initialization
const app = express();


//----------------------Middleware (Exec before call routes)-----------------------------

//Logs in consol
app.use(morgan('dev'));

//Server can receive json 
app.use(express.json());

//enable cors
app.use(cors());

//----------------------------------------------Routes---------------------------------------------

app.use('/api', require('./routes/words.routes'));



export default app;