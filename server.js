const express=require('express');
const hbs=require('hbs');
var app=express();
const port=process.env.PORT || 3000;
//hbs.registerPartials(__dirname,'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/new'));
app.get('/',(req,res)=>{
  res.send({
    name:'ratan',
    likes:[
      'money',
      'money',
      'money'
    ]
  });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
      pageTitle:'saa'
    });
})  
app.listen(port,()=>{
  console.log("server is on");
});
