plus = function(a, b, callback) {
    var result = a + b
    callback(result);
}

plus(5, 10, function(res) {
    console.log(res);
})

console.clear();

a = function(a, b, callback) {
    callback(a+b, a-b);
}

a(5, 10, function(res1, res2) {
    console.log(res1);
    console.log(res2);
})

abc = function(a, b, c , callback) {
    callback(a+b, a+c , a-b);
}

abc(10, 20, 23, function(rel1, rel2, rel3){ 
    console.log(rel1);
    console.log(rel2);
    console.log(rel3);
})

function func() {
    function cb() {
        console.log("리턴");
    }
    return cb;
}
func();
func()();

var myCb = func();
console.log(typeof (myCb));
myCb();

function func() {
    return function () {
        console.log("리턴");
    };
}
func1()();

var myCb1 = func1();
myCb1;

function callback(cb) {
    cb();
}

function add(x, y){
    let sum = x + y;
    callback(function () {
        console.log(sum);
    })
}