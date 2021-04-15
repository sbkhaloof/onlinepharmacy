console.log('this is lab 5');
var checkupnum= prompt('please enter checkup number');
var pressure= prompt('please enter your sphagnomanometer reading as number/number');
for (var i=1;i<= checkupnum;i++)
{
if(pressure==='120/80')
{
 var image ='<img src="https://images-na.ssl-images-amazon.com/images/I/61I1BXZTbML._AC_SL1403_.jpg" alt="perfect blood pressure reading"/>';
 document.write(image)
  console.log('I have perfect pressure '+ pressure)
}
else 
{
  var image2='<img src="https://www.glutenfreesociety.org/wp-content/uploads/2019/09/causes-of-high-blood-pressure.jpg" alt="My blood pressure reading"/>';
  document.write(image2);
  console.log('my pressure is '+ pressure);}
} 
