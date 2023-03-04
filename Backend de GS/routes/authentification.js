//require=importation 
const router = require("express").Router();
//npm install bcryptjs (Terminal)
const bcrypt = require("bcryptjs");
const User = require("../model/user");
//Token
const config = require("../config");
const jwt = require("jsonwebtoken");

//Sign UP User
router.post('/signup', async (req, res) => {
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const { email, password } = req.body;
    const newUser = new User({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        password: hashedPassword});
    await newUser.save();
    res.status(200).json("user succeffuly added");
});

//SignIn User
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send("Incorrect Password");
    return res.status(200).json({user, 
         token: jwt.sign({ data: user}, config.secretKey)});

});

module.exports = router;


