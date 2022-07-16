const newsRouter=require('./news');   //import file news.js trong routes
const siteRouter=require('./site');   //import file site.js trong routes
const coursesRouter=require('./courses'); //import file courses.js trong routes
const meRouter=require('./me');//import file me.js trong routes
//file index.js dùng để điều hướng các route


function route(app){


    app.use('/news',newsRouter);

    app.use('/',siteRouter);

    app.use('/courses',coursesRouter);

    app.use('/me',meRouter);
}

module.exports=route;  //export function route