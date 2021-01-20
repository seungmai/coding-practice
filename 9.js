'use strict'

function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('hello'));
printWithDelay(() => console.log('async callback'), 2000);
console.clear();

// Callback Hell example
class UserStorage { // UserStorage class를 만듬.
    loginUser(id, password, onSuccess, onError) { // 아이디 , 비밀번호, 로그인성공, 로그인실패)
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) { //정보를 다시 받아오는 api
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }
 //클래스를 이용해서 코딩하기 
 //1. 사용자에게 아이디와 패스워드를 입력을 받아오고, 입력받아온 아이디와 패스워드를 이용해서 로그인을 해보고 로그인이 성공적으로 된다면 우리가 로그인한 사용자의 아이디를 다시 받아오게되는데 받아온 아이디를 이용해서 역할을 한번 다시 요청해서 받아올 것이다. 역할을 요청해서 역할이 성공적으로 받아와 진다면 우리에게는 사용자의 오브젝트가 있는데 이름과 역할이 들어있는 것을 출력해보는 것을 해보아라.

plus = function(a, b, callback) {
    var result = a + b
    callback(result);
}

plus(5, 10, function(res) {
    console.log(res);
})