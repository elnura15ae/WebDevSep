const HomeController =(req, res)=>{
    res.render('index', {
        name:"jack"
    })
}

module.exports={HomeController}