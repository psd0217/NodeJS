/*
function a(){
  console.log('A');
}
*/
//a라는 변수에 함수를 넣어준다. 함수 = 값
var a = function()
{ //익명함수
  console.log('A');
}

function slowfunc(callback)
{
  callback();
}

slowfunc(a);
