const express = require('express');
const app =express();



app.use(express.static('./views/imagecooking'))
app.set('view engine','pug');
app.set('views','./views');

app.get('/',function(req,res){
res.render('cooking');
});

app.get('/Rosemilk',function(req,res){
    res.render('gulabmilk');
    });
    
    app.get('/ChillyPickle',function(req,res){
        res.render('chilly');
        });

        app.get('/Classes',function(req,res){
            res.render('classespage');
            });

            app.get('/welcome',function(req,res){
                res.send("Thanks for registering with us");
                });

app.listen(8080);