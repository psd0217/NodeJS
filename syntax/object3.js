//1억짜리 코드
//2000명 참여
//20년된 프로그램
//상황

/*
var v1 = 'v1';
// 100000 code
v1 = 'soon'; // 누군가낑겨넣음으로 버그 발생
var v2 = 'v2';
*/

var q ={
  v1:'v1',
  v2:'v2',
  f1:function(){
    console.log(this.v1);
  },
  f2:function(){
    console.log(this.v2);
  }

}



q.f1();
q.f2();
