var members = ['soon','egoing','hoya']; //array
console.log(members[1]);
var i = 0;
while(i < members.length){
  console.log('array loop : ', members[i]);
  i = i + 1;
}

var roles = {
  //key : value
  'programmer':'soon',
  'designer':'egoing',
  'manager' : 'hoya'
}

//둘다 된다
console.log(roles.designer); //object
console.log(roles['designer']); //object

for(var name in roles)
{
  console.log('object key : ', name, ' value : ', roles[name]);
}
