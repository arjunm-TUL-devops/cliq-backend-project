const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const trackerRoutes = require('./routes/tracker')
const path = require('path')
require('dotenv/config')


//Setting up the express server
const app = express();

//Body Parser
app.use(bodyParser.json())

//Connecting to Database
mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.ux7lm.mongodb.net/trackerdb?retryWrites=true&w=majority`,()=>{
    console.log("Connected to Database Successfully!")
})

//Importing Routes
app.use('/tracker',trackerRoutes);

//Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/pages/index.html'));
});


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});