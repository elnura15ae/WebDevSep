const homepageController = (req, res)=>{
    res.send('Homepage!')
}

const loginController= (req,res)=>{
    res.send('Login section')
}

const registerController= (req, res)=>{
    //console.log(req.body)
    res.send('Register Section')
}

const apiController=(req, res)=>{
    res.json({
        id:1,
        title:"Lorem Ipsum"
    })
}

module.exports = {homepageController, loginController, registerController,apiController}
