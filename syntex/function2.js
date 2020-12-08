console.log( Math.round(1.6)); //객체.함수
console.log( Math.round(1.4)); //반올림이구나~
//입력을 해보쟈!

//function sum(first, second) // parameter 매게변수!
//{
//  console.log(first + second);
//}

//sum(2,4); //합을 하는 함수
//sum(4,7); // argument (인자)

function sum(first, second) // parameter 매게변수!
{
  console.log('a');
  //리턴을 만나면 함수는 끝남
  return first + second; //값을 리턴해줌
  console.log('b'); //출력안됨
}

sum(2,4); //이제 화면 출력 안됨
console.log(sum(2,4)); //이렇게 값을 리턴 받음


Math.round(1.6); //출력이 안된다!
console.log(Math.round(1.6)); //출력을 해준다
