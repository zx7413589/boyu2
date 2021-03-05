// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

// 加载bodyParser模块
//const bodyParser = require('body-parser');

// 加载MD5模块
//const md5 = require('md5');
//
// 创建MySQL连接池
const pool = mysql.createPool({
  host: 'w.rdc.sae.sina.com.cn',   //MySQL服务器地址
  port: 3306,          //MySQL服务器端口号
  user: 'mz33knl2wy',        //数据库用户的用户名
  password: 'z1yx4i0lxxlxl15kl2413kji5kjlj1lwhxxi42i2',        //数据库用户密码
  database: 'app_hljshaoxiandui',    //数据库名称
  connectionLimit: 20, //最大连接数
  charset: 'utf8'      //数据库服务器的编码方式
});

// 创建服务器对象
const server = express();

// server.use(bodyParser.urlencoded({
//   extended: false
// }));


// 加载CORS模块
const cors = require('cors');

// 使用CORS中间件
server.use(cors({
  origin: ['http://1.honglingjin.applinzi.com','http://honglingjin.applinzi.com','https://honglingjin.applinzi.com']
}));

//获取城市名城接口
server.get('/city', (req, res) => {
  //SQL语句获取所有城市
  let sql = "select city_name,cityname_pinyin,szm from city";
  pool.query(sql, (err, result) => {
    if (err) throw error;
    res.send({ message: "ok", code: 200, result: result });
  });
}),
  server.get('/backgroundimg', (req, res) => {
    let sql = "select city_name,url from background_image where city_name=?";
    let cityName = req.query.cityname;
    pool.query(sql, [cityName], (err, result) => {
      if (err) throw error;
      res.send({ message: "ok", code: 200, result: result });
    })
  })
// 查询店铺
server.get("/shopname", (req, res) => {
  let sql = "select bg,shopname,price,address,id from shopname where city_name=?";
  let city_name = req.query.city_name;
  pool.query(sql, [city_name], (err, result) => {
    if (err) throw err;
    res.send({ result: result });
  })
});
// 搜索地区
server.get("/searcharea", (req, res) => {
  let area = req.query.area;
  let city_name = req.query.city_name;
  if (area == '全部') {
    let sql = "select bg,shopname,price,address from shopname where city_name=? ";
    pool.query(sql, [city_name], (err, result) => {
      if (err) throw err;
      res.send({ result: result });
    })
  } else {
    let sql = "select bg,shopname,price,address from shopname where city_name=? and area=?";
    pool.query(sql, [city_name, area], (err, result) => {
      if (err) throw err;
      res.send({ result: result });
    })
  }
});
//搜索户型
server.get('/layout', (req, res) => {
  let sql = "select lid,avator,title,shop_address,address_details,max_price,min_price from layout where city_name=?";
  let city_name = req.query.city_name;
  pool.query(sql, [city_name], (err, result) => {
    if (err) throw err;
    res.send({ result: result });
  })
})
// 泊寓点点
server.get('/boyudd', (req, res) => {
  let sql = "select title_img,title,id from boyu_dd where city_name =?"
  let cityName = req.query.cityName;
  pool.query(sql, [cityName], (err, result) => {
    if (err) throw err;
    res.send({ result: result });
  })
})
server.get('/story', (req, res) => {
  let sql = "select title_img,title,id from story where city_name =?"
  let cityName = req.query.cityName;
  pool.query(sql, [cityName], (err, result) => {
    if (err) throw err;
    res.send({ result: result });
  })
})
server.get('/tocity', (req, res) => {
  let sql = "select cityname_pinyin from city where city_name=? "
  let cityname = req.query.city_name;
  pool.query(sql, [cityname], (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})
// 获取每个城市的区
server.get('/countarea', (req, res) => {
  let sql = "SELECT DISTINCT area FROM shopname where city_name=?"
  let city_name = req.query.city_name;
  pool.query(sql, [city_name], (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})
// 泊寓点点分页查询
server.get('/boyuddlimit', (req, res) => {
  let cityname = req.query.cityname;
  let pagesize = req.query.pagesize;
  let sql = "select count(id) count from boyu_dd where city_name=? "
  pool.query(sql, [cityname], (err, result) => {
    if (err) throw err;
    let pageCount = Math.ceil((result[0].count) / 8);
    sql = "select title,title_img,id from boyu_dd where city_name=? limit ?,8";
    pool.query(sql, [cityname, (pagesize - 1) * 8], (err, result) => {
      if (err) throw err;
      res.send({ result: result, pageCount: pageCount });
    })
  })
})
server.get('/storylimit', (req, res) => {
  let cityname = req.query.cityname;
  let pagesize = req.query.pagesize2;
  let sql = "select count(id) count from story where city_name=?"
  pool.query(sql, [cityname], (err, result) => {
    if (err) throw err;
    let pageCount = Math.ceil((result[0].count) / 8);
    sql = "select title,title_img,id from story where city_name=? limit ?,8"
    pool.query(sql, [cityname, (pagesize - 1) * 8], (err, result) => {
      if (err) throw err;
      res.send({ result: result, pageCount: pageCount })
    })
  })
  // boyudd详情接口
  server.get('/dddetail', (req, res) => {
    let id = req.query.id;
    let sql = "select article from boyu_dd where id= ?"
    pool.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send({ result: result})
    })
  })
})
//页面加载时获取总数据量计算出页数
server.get('/findShopCount',(req,res)=>{
  let cityName = req.query.cityName;
  let area = req.query.area;
  if(area=="全部"){
    let sql = "select shopname from shopname where city_name=?";
    pool.query(sql,[cityName],(err,result)=>{
      if(err)throw err;
      res.send({message:'ok',code:200,result:result});
    })
  }else{
    let sql = "select shopname from shopname where city_name=? and area=?";
    pool.query(sql,[cityName,area],(err,result)=>{
      if(err) throw err;
      res.send({message:'ok',code:200,result,result});
    })
  }
})
//find页面根据区域获取门店
server.get('/findShop',(req,res)=>{
  let cityName = req.query.cityName;
  let area = req.query.area;
  let page = req.query.page;
  let pagesize = req.query.pagesize;
  let offset = (page-1) * pagesize;
  if(area=='全部'){
    let sql = "select shopname,address,price,bg,count,id from shopname where city_name=? limit ?,5";
    pool.query(sql,[cityName,offset],(err,result)=>{
      if(err)throw err;
      res.send({message:"ok",code:200,result:result});
    })
  }else{
    let sql = "select shopname,address,price,bg,count,id from shopname where city_name=? and area=? limit ?,5";
    pool.query(sql,[cityName,area,offset],(err,result)=>{
      if(err)throw err;
      res.send({message:"ok",code:200,result:result});
    })
  }
})

//获取所有房型数据条数
server.get('/findHouseCount',(req,res)=>{
  let cityName = req.query.cityName;
  let area = req.query.area;
  if(area=="全部"){
    let sql = "select title from layout where city_name=?";
    pool.query(sql,[cityName],(err,result)=>{
      if(err)throw err;
      res.send({message:'ok',code:200,result:result});
    })
  }else{
    let sql = "select title from layout where city_name=? and area=?";
    pool.query(sql,[cityName,area],(err,result)=>{
      if(err) throw err;
      res.send({message:'ok',code:200,result,result});
    })
  }
})
//获取房型数据
server.get('/findHouse',(req,res)=>{
  let cityName = req.query.cityName;
  let area = req.query.area;
  let page = req.query.page;
  // let pagesize = req.query.pagesize;
  let offset = (page-1) * 5;
  if(area=='全部'){
    let sql = "select lid,title,address_details,avator,layout,square,methods,min_price,max_price,detail,shop_name from layout where city_name=? limit ?,5";
    pool.query(sql,[cityName,offset],(err,result)=>{
      if(err)throw err;
      res.send({message:"ok",code:200,result:result});
    })
  }else{
    let sql = "select lid,title,address_details,avator,layout,square,methods,min_price,max_price,detail,shop_name from layout where city_name=? and area=? limit ?,5";
    pool.query(sql,[cityName,area,offset],(err,result)=>{
      if(err)throw err;
      res.send({message:"ok",code:200,result:result});
    })
  }
})
//详情接口
server.get('/shopnameINFO',(req,res)=>{
  let id=req.query.id;
  let sql='select id,bg,shopname,detail,images,phone,address,price from shopname where id=?';
  pool.query(sql,[id],(err,result1)=>{
      if(err)throw err;
      let shopname=result1[0].shopname;
      sql = 'select lid,title,avator,address_details,shop_name,layout,images,square,phone,detail,min_price,max_price,methods from layout where shop_name=?'
      pool.query(sql,[shopname],(err,result2)=>{
          if(err)throw err;
          res.send({ layout: result2, result: result1 });
      })
  })
})
server.get('/layoutINFO',(req,res)=>{
  let id=req.query.id;
  let sql='select lid,title,avator,address_details,shop_name,layout,images,square,phone,detail,min_price,max_price,methods from layout where lid=?';
  pool.query(sql,[id],(err,result1)=>{
      if(err)throw err;
      let shopname=result1[0].shop_name;
      sql = 'select id,bg,shopname,detail,images,phone,address,price from shopname where shopname=?'
      pool.query(sql,[shopname],(err,result2)=>{
          if(err)throw err;
          res.send({ shopname: result2, result: result1 });
      })
  })
})
//

// 指定服务器对象监听的端口号
server.listen(5050, () => {
  console.log('server is running...');
});