var args = process.argv;
console.log(args[2]);

console.log('A');
console.log('B');
//if(true)
//{//실행
//  console.log('C1');
//}
//if(false)
//{//무시
//  console.log('C2');
//}

if(args[2] === '1') //true
{//실행
  console.log('C1');
}
else
{//무시
  console.log('C2');
}
console.log('D');
