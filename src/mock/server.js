let http =require('http')
let fs=require ('fs')
let url=require('url')
let sliders=require('./sliders')
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if(req.method=='OPTIONS')  return res.end()


  let {pathname,query}=url.parse(req.url)
  if(pathname=='/sliders'){
    res.setHeader('Content-Type','application/json;charset=utf8')
    res.end(JSON.stringify(sliders))
  }
}).listen(8082)
