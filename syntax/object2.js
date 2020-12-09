// array, object

console.log(1 + 1);
console.log(1 + 2);

//값이 될 수 있다
var f = function(){
  console.log(1 + 1);
  console.log(1 + 2);
}
//출력
console.log(f);
//실행
f();

//동작한다.
var a = [f];
a[0]();

//동작한다.
var o = {
  func:f
}
o.func();

//값이 될 수 없는 경우
//error
//var i = if(true) {  console.log(1); };
//error
//var w = while(true){console.log(1);};
