const connectToMongo=require('./Database');
const express = require('express');
const router=express.Router();
connectToMongo();
const bodyParser=require('body-parser');
const app = express()
const port = 5000
const User = require('./User');
const cors = require("cors");
const { body, validationResult } = require('express-validator');
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

app.post('/api/saveData',[
  body('email','Enter a valid email').isEmail()
], async (req, res) => {

  const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({errors :result.array()})
    }
  
    try{
      let user= await User.findOne({email:req.body.email})
      if(user){
        return res.status(400).json({errors :"A user with this email  address already exists"})
      }
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
    // console.log(savedUser);

    res.status(200).json({ message: 'User created successfully', user: savedUser });
  }catch(error){
    console.log(error.message)
    res.status(500).send('Some error occurred')
}
  // res.write("User Saved Successfully");
});
app.get('/thankYou',(req,res)=>{
  res.sendFile(__dirname+'/thankYou.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})