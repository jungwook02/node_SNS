const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.join=async(req,res,next) =>{
    const {nick,email,password} = req.body;

    try{
        const exUser = await User.findOne({where:{email}});
        if(exUser) {
            return res.redirect('/join?error=exist');
        }
        //비밀번호 암호화 bcrypt
        const hash = await bcrypt.hash(password,12);

        await User.create({
            email,
            nick,
            password:hash,
        });
        return res.redirect('/');

        
    }catch(error) {
        console.error(error);
        next(error);
    }

}


//POST/auth/login
exports.login=(req,res,next) =>{
    passport.authenticate('local',(authError,user,info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }

        if(!user) { //로직 실패
            return res.redirect('/?loginError=${info.message}');
        }
        return req.login(user,(loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);

            }
            return res.redirect('/');
        })
    })(req,res,next);
    
}


exports.logout=(req,res,next) =>{
    req.logout(()=>{
        res.redirect('/');
    })
    
}