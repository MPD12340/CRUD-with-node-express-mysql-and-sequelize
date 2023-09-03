const CustomError = require('../errors/customError');
const User = require('../models/userModel')

//creating new user in the database

const createUser = async(req, res, next)=>{
    const {name, email, phoneNumber} = req.body;
    try{
        const existingUser = await User.findOne({ where: { email } });
        if(existingUser) throw new CustomError("Email is already taken", 409)
        const newUser =await User.create({name , email , phoneNumber})
        res.json({msg:"user created successfully" , newUser})
    } catch (error) {
        next(error)
    }
}

//Get list of all users in the database

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll(); // Use User.findAll here
        if (users.length === 0) {
            throw new CustomError("No users found", 404);
        }
        res.status(200).json({ msg: "Successfully Fetched", users });
    } catch (error) {
        next(error);
    }
};


//Get single  user based on the unique identifier i.e its id (uuid)
const getSingleUser = async(req, res, next)=>{
    try {
        const userId = req.params.id
        const finduser = await User.findByPk(userId)
        if(!finduser)throw new CustomError("User not found" , 404)
        res.status(200).json({msg:"successfully fetched" , finduser})
    } catch (error) {
        next(error)
    }
}


//updating user on the basis of id 

const updateUser = async(req, res, next)=>{
    try {
        let userID = req.params.id
        const user = await User.findByPk(userID);
        if(!user) throw new CustomError("User not found" , 404)
        await user.update(req.body)
        res.status(200).json({msg:"updated successfully" , user})
    } catch (error) {
        next(error)
    }
}

//deleting a specific user on the basis of id

const deleteUser= async(req, res, next)=>{
    try {
        const userID = req.params.id
       const user = await User.findByPk(userID)
       if(!user)throw new CustomError("user not found" , 404)
       await user.destroy()
          res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports = {createUser,getAllUsers, getSingleUser , updateUser , deleteUser}