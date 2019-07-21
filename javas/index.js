function myForm(){

var dd= document.getElementById("dat").value;
var mm= document.getElementById("mot").value;
var yy= document.getElementById("yar").value;
var cc= document.getElementById("cent").value;
var gen= document.getElementById("mal", "fema").value;
  

var day= parseInt(dd+13*(mm+1)/5+yy+yy/4+cc/4+5*cc);
day=day%7;
var days= day.toFixed;


var akans=["Kwasi","Akosua","Kwadwo","Adwoa","Kwabena","Abena","Kwaku","Akua","Yaw","Yaa","Kofi","Afua","Kwame","Ama"];

switch(day)
{
    case 0:
        if (days===0 && gen=== "male"){
      document.getElementById("akanName").innerHTML= akans[0];
        }
        else {
     document.getElementById("akanName").innerHTML= akans[1];
    }
        break;

    case 1:
        if (days===1 && gen==="male"){
            document.getElementById("akanName").innerHTML= akans[2];
        
        }
           else{
            document.getElementById("akanName").innerHTML= akans[3];;
        }
        break;
        
    case 2:
          if (days===2 && gen==="akans"){
            document.getElementById("akanName").innerHTML= akans[4];
          }
              else{
            document.getElementById("akanName").innerHTML= akans[5];
              }
              break;

      case 3:  
        if (days===3 && gen==="male"){
            document.getElementById("akanName").innerHTML= akans[6];
        }
            else{
            document.getElementById("akanName").innerHTML= akans[7];
        }
        break;

      case 4:
          if (days===4 && gen==="male"){
            document.getElementById("akanName").innerHTML= akans[8];
          }
              else{
            document.getElementById("akanName").innerHTML= akans[9];
          }     
          break;

      case 5:
          if ( days===5 && gen==="male"){
            document.getElementById("akanName").innerHTML= akans[10];
          }
              else{
            document.getElementById("akanName").innerHTML= akans[11];
          } 
          break;
          
      case 6:
          if ( days===6 && gen==="male"){
            document.getElementById("akanName").innerHTML= akans[12];
          }

              else{
            document.getElementById("akanName").innerHTML= akans[13];
          }      
        }
        return akans;
      }
