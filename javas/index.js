function forms(){

var input = document.getElementById("birthdate").value;
var d=new Date (input);

var dd= document.getElementById("dat").value;
var mm= document.getElementById("mot").value;
var yy= document.getElementById("yar").value;
var cc= document.getElementById("cent").value;
var gen= document.getElementById("mal", "fema").value;
  

var day= parseInt(dd+13*(mm+1)/5+yy+yy/4+cc/4+5*cc);
day=day%7;
var days= day.toFixed;


var akans=["Kwasi","Akosua","Kwadwo","Adwoa","Kwabena","Abena","Kwaku","Akua","Yaw","Yaa","Kofi","Afua","Kwame","Ama"]

switch(day)
{
    case 0:
        if (day===0 && gender=== "male"){
      document.getElementById("Akan-Name").innerHTML='akans[0]';
        }
        else {
     document.getElementById("Akan-Name").innerHTML='akans[1]';
    }
        break;

    case 1:
        if (day===1 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='akans[2]';
        
        }
           else{
            document.getElementById("Akan-Name").innerHTML='akans[3]';;
        }
        break;
        
    case 2:
          if (day===2 && gender==="akans"){
            document.getElementById("Akan-Name").innerHTML='akans[4]';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='akans[5]';;
              }
              break;

      case 3:  
        if (day===3 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='akans[6]';;
        }
            else{
            document.getElementById("Akan-Name").innerHTML='akans[7]';;
        }
        break;

      case 4:
          if (day===4 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='akans[8]';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='akans[9]';
          }     
          break;

      case 5:
          if ( day===5 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='akans[10]';;
          }
              else{
            document.getElementById("Akan-Name").innerHTML='akans[11]';
          } 
          break;
          
      case 6:
          if ( day===6 && gender==="male"){
            document.getElementById("Akan-Name").innerHTML='akans[12]';
          }

              else{
            document.getElementById("Akan-Name").innerHTML='akans[13]';
          }      
        }
        return akans;
      }
