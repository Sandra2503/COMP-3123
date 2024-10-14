const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { status } = require('express/lib/response');


exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({
            username,
            email,
            password: hashedPassword    
        })
        await newUser.save();
         res.status(201).json({ message: "User created successfully.", user_id: newUser._id });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
 };

 exports.login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });
        if( !user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).json({status: false, message: "Invalid Username or Password"})
        }
        const token = jwt.sign({user_id: user._id}, 'your_jwt_token', { expiresIn: '1h'});
        res.status(200).json({message: "Login Successfull", jwt_token: token });
    }
    catch(err) {
        res.status(500).json({message : err.message})
    }
 };

