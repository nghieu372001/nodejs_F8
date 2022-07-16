//const res = require("express/lib/response"); không cần


//Xử lý nhiều URL liên quan đến /news
class NewsController{

    //GET /news
    index(req,res) { //index() là 1 function, đoạn này = (req, res) => {res.render('search')};
        res.render('news');
    }


    //GET /news/:slug
    show(req,res) {
        res.send('NEW DETAIL');
    }
}



module.exports=new NewsController    //xuất class NewsController ra ngoài