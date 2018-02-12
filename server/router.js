const Authentication=require('./controllers/authentication');
const passportService=require('./services/passport');
const passport=require('passport');

const reuireAuth=passport.authenticate('jwt',{session:false});
const requireLocal=passport.authenticate('local',{session:false});


module.exports=function(app){

    app.get('/',reuireAuth,function(req,res,next){
        res.send({hi:'Hello'});
    })

    app.post('/signin',requireLocal,Authentication.signin);

    app.post('/signup',Authentication.signup);
}