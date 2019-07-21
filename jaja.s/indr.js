var date;
var month;
var year;
var gender=prompt("please enter your gender")

if (month=1){
    month=13;
    year --;
}
if (month=2){
    month=14;
    year --;
}
var dd= parseInt(prompt("please enter your date:"));
var mm= parseInt(prompt("please enter your month:"));

var yy= parseInt(prompt("please enter the year:"));
var yy= math.ceil (year%100);
var cc= math.ceil (year/100);

var day= dd+13*(mm+1)/5+yy+yy/4+cc/4+5*cc;

day=day%7;

console.log(day);