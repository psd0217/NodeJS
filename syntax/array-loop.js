var number = [1, 400, 12, 34, 5];

var i = 0;
var total = 0;
while(i < number.length){ // 5  다이나믹하게 ㅎ
  console.log(number[i]);
  total = total + number[i];
  i = i + 1;
}

  console.log(`total : ${total}`);
