

exports.renderProfile = (req,res,next)=>{
    res.render('profile',{title:'내 정보 -nodeBird '});
};

exports.renderJoin = (req,res,next)=>{
    res.render('join',{title:'회원 가입 -nodeBird '});
};

exports.renderMain = (req,res,next)=>{
    res.render('main',{
        title:'nodebird',
        twist: [],
    });
};


//라우터 -> 컨트롤러 -> 서비스(요청,응답 모름...)