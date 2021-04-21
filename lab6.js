alert('check your tempreture');
console.log('this is lab 6')
function tempreture(temp)
{  
if(temp==37){alert('your tempreture is perfict');}
else{alert('you should go to doctor');}
return temp;}
var x=prompt('please enter your tempreture');
console.log('your tempreture is '+tempreture(x));
