const express = require('express')
const router = express.Router()
const {createUser ,getAllUsers, getSingleUser, updateUser , deleteUser} = require('../controllers/userController')


router.post('/newuser' , createUser);
router.get('/getallusers', getAllUsers);
router.get('/getsingleuser/:id', getSingleUser);
router.patch('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);


module.exports = router
