
function ghana(){

if (month=1){
    month=13;
    year --;
}

if (month=2){
    month=14;
    year --;
}

var dd= d.getDate();
console.log(dd);

var mm= d.getMonth();
console.log(mm);

var yy= year%100;
var yy= d.getFullYear();
console.log(yy);

var cc= yy/100;
var cc=d.getCentury();
console.log(cc);

if (document.getElementById("gender").checked){
    var gender="male"
}

else{
 var gender="female"   
}

var day= parseInt(dd+13*(mm+1)/5+yy+yy/4+cc/4+5*cc);

day=day%7;
alert(day);



switch(day)
{
    case 0:
        if (day===0 && gender=== "male"){
      document.getElementById("Akan-Name").innerHTML='Akosua';
        }
        else {
     document.getElementById("Akan-Name").innerHTML='Adwoa';
    }
        break;

    case 1:
        if (day===1 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Kwadwo';
        }
           else{
            document.getElementById("Akan-Name").innerHTML='Akosua';;
        }
        break;
        
    case 2:
          if (day===2 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Kwabena';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='Adwoa';;
              }
              break;

      case 3:  
        if (day===3 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Kwaku';;
        }
            else{
            document.getElementById("Akan-Name").innerHTML='Abenaa';;
        }
        break;

      case 4:
          if (day===4 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Yaw';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='Yaa';
          }     
          break;

      case 5:
          if ( day===5 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Kofi';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='Afua';
          } 
          break;
          
      case 6:
          if ( day===6 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='Kwame';
          }

              else{
            document.getElementById("Akan-Name").innerHTML='Ama';
          }      
        }
    }
