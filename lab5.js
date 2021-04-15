console.log('this is lab 5');
var checkupnum= prompt('please enter checkup number');
var pressure= prompt('please enter your sphagnomanometer reading as number/number');
for (var i=1;i<= checkupnum;i++)
if(pressure==='120/80')
{
  var image='<img src="https://i.insider.com/5ed178d93f737032db244bf3?width=1136&format=jpeg" alt="perfect blood pressure reading">';
  document.write(image);
}
else {console.log('my pressure is '+ pressure);}