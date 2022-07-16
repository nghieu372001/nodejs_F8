const express = require('express') //nạp thư viện express( import thư viện express, express nằm trong node_module)   
const app = express()
const port = 3000 // chạy website ở cổng nào
const path = require('path') // path là thư viện có sẵn của nodejs
const db=require('./config/db') //import file db
const methodOverride=require('method-override');


//Connect to DB
db.connnet();



var morgan = require('morgan') //import thư viện morgan
// app.use(morgan('combined')) //HTTP logger

const hbs  = require('express-handlebars'); // nạp thư viện Template engine handlebars
app.engine('hbs', hbs.engine({extname: '.hbs',helpers:{sum: (a,b)=>a+b,}}),); // sử dụng template engine là handlebars,extname: '.hbs' --> tên viết tắc của handlerbar
app.set('view engine', 'hbs'); // đặt cho express sử dụng handlebars


app.set('views',path.join(__dirname, 'resource', 'views'));
//__dirname sẽ trỏ đến thư mục đang chứa file index.js(D:\File_Visual_Studio_Code\Nodejs_MongoDB\src)
//thêm 'resources', 'views' --> (D:\File_Visual_Studio_Code\Nodejs_MongoDB\src\resources\views) --> trỏ đến thư mục chứa file handlebars
// console.log(path.join(__dirname, 'resource', 'views'));

app.use(express.static(path.join(__dirname, 'public'))); //xử lý file tĩnh ( hình ảnh,...)
app.use(express.urlencoded({extended:true}));  // midleware xử lý dữ liệu được gửi từ form
app.use(express.json()); //midleware xử lý dữ liệu được gửi từ javascript


app.use(methodOverride('_method'));

const route=require('./routes/index.js') //import function route trong file index.js của thư mục routes

//Route init
route(app); // truyền app(const app = express()) vào function route trong file index.js của thư mục routes

// app.get('/',(req,res){ 
//   res.render('home');
// })

/*Lưu ý: Query Parameters(GET) --> res.render, Form Data(POST) -->res.body  */



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})