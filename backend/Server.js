const connectToMongo=require('./Database');
const express = require('express');
const router=express.Router();
connectToMongo();
const bodyParser=require('body-parser');
const app = express()
const port = 5001
const User = require('./User');
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors())
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:5173',
//     changeOrigin: true,
//     // Remove the '/api' prefix when forwarding requests
    
//   })
// );

app.get('/',(req,res)=>{
       res.send("App Working");
})

app.post('/api/saveData', async (req, res) => {

  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    res.status(200).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
  // res.write("User Saved Successfully");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})