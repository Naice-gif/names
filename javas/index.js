var date;
var month;
var year;
var gender:[50];

if (month=1){
    month=13;
    year --;
}
if (month=2){
    month=14;
    year --;
}
var dd= prompt("please enter your date:");
var mm= prompt("please enter your month:");

var yy= prompt("please enter the year:");

var yy= year%100;
var cc= year/100;

var day= dd+13*(mm+1)/5+yy+yy/4+cc/4+5*cc;

day=day%7;

switch(day)
{
    case 0:
        if (var gender= "male");{
        console.log("Hello Kwasi!");
        else 
        console.log("Hello there Akosua!");
    }
        break;

    case 1:
        if (var gender="male");{
           console.log("Hello kwadwo ");
           else
           console.log("Hello Adwoa");
        }
        break;
        
     case 2 :
          if (var gender="male") ;{
              console.log("Hello Kwabena");
              else
              console.log("Hello Abenaa");
              }
              break;

      case 3:  
        if (var gender="male");{
            console.log("Hello there Kwaku");
            else
            console.log("Hello there Akua");
        }   
        break;

      case 4:
          if (var gender="male"); {
              console.log("Hello Mr Yaw");
              else
              console.log("Hello there Yaa");
          }     
      case 5:
          if (var gender="male");{
              console.log("Hello there Mr Kofi");
              else
              console.log("Hello there Afua ")
          }  
      case 6:
          if (var gender="male");{
              console.log("Hello there Mr Kwame");
              else
              console.log("Hello there Ama");
          }      
}

