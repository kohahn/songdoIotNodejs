var express = require('express');
var router = express.Router();

/* GET users listing. */
var users=[];
router.get('/:id', function(req, res, next) {  //조회
	if(users.length > Number(req.params.id)){
		res.send(JSON.stringify(users[Number(req.params.id)]));
	}else{
		res.send(JSON.stringify({})); // 값이 없음
	}	  
});
router.get('/',function(req,res,next){
	res.send(JSON.stringify(users));
});

router.post('/', function(req,res,next){ // 값입력
	console.log(req.body.name);
	console.log(req.body.age);
	var user={
		name:req.body.name, age:req.body.age
	};
	users.push(user);
	res.send(JSON.stringify(user));
});

router.put('/:id', function(req,res,next){  //수정
	console.log(req.body.name);
	console.log(req.body.age);
	var user={
		name:req.body.name, age:req.body.age
	};
	if(users.length > Number(req.params.id)){
		users[Number(req.params.id)]=user;
	}else{
		users.push(user);
	}
	res.send(JSON.stringify(user));
});

router.delete('/:id', function(req,res,next){  //삭제
	if(users.length > Number(req.params.id)){
		users.splice(Number(req.params.id),1);
	}
	res.send(JSON.stringify({length:users.length}));
});

module.exports = router;
