var express = require('express');
const jwt= require('jsonwebtoken')
var router = express.Router();


const {getUsers,addUser,getUserById,updateUserById,deleteUserById, authController, loginController} = require('./controllers/userController')


/* GET users listing. */
router.get('/',(req, res, next)=>{
    try{
        console.log(req.headers.authorization.split('')[1]);
        const token= req.headers.authorization.split('')[1]
        jwt.verify(token)
        next()
    } catch(error){
        res.status(401).json({
            message:'no token provided or invalid/expired token',
            err:error
        })
    }
}, getUsers);

// post routers
router.post('/',addUser)


router.get('/:id',getUserById)


// update user
router.put('/:id',updateUserById)

// delete user
router.delete('/:id',deleteUserById)

// login auth
router.get('/auth/login', authController)

router.post('/auth/login', loginController)


module.exports = router;
