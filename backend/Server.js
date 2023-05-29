const connectToMongo=require('./Database');
const express = require('express');
const router=express.Router();
connectToMongo();
const app = express()
const port = 3000
const User = require('./User');
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:3000',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '', // Remove the '/api' prefix when forwarding requests
//     },
//   })
// );

app.get('/',(req,res)=>{
       res.send("App Working");
})

router.post('/register', async (req, res) => {

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
  res.write("User Saved Successfully");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})