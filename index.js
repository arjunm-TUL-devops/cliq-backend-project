const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const trackerRoutes = require('./routes/tracker')
require('dotenv/config')


//Setting up the express server
const app = express();
const PORT = 8080;

//Body Parser
app.use(bodyParser.json())

//Connecting to Database
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connected to Database Successfully!")
})

//Importing Routes
app.use('/tracker',trackerRoutes);

//Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});