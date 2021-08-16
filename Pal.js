// var delayFunc;
var change=0;
function ChangeTheme(){
  var bgcolor=document.getElementById("theme");
  var bgcolorfooter=document.getElementById("footer");
  var linkcolors=document.getElementsByTagName("a");
  var changeButtonCheck=document.getElementById("click");
  if(change===0){
  
  bgcolor.style.backgroundColor="#1d2125"
  bgcolor.style.color="white"
  bgcolorfooter.style.backgroundColor="#666566"
  bgcolorfooter.style.color="black"
  changeButtonCheck.style.backgroundColor="#666566"
  changeButtonCheck.style.color="black"
   linkcolors[0].style.color="black";
   linkcolors[0].style.backgroundColor="#c2bec0"

  for(var i=1;i<linkcolors.length;i++)
   linkcolors[i].style.color="black";
  change=1

  }
  else{
  change=0;
  bgcolor.style.backgroundColor="#c2bec0"
  bgcolor.style.color="black"
  bgcolorfooter.style.backgroundColor="#1d2125"
  bgcolorfooter.style.color="white"
  changeButtonCheck.style.backgroundColor="#1d2125"
  changeButtonCheck.style.color="white"

  linkcolors[0].style.color="white";
   linkcolors[0].style.backgroundColor="#1d2125"
  for(var i=1;i<linkcolors.length;i++)
   linkcolors[i].style.color="white";
  }


  
}

function DelayCheck() {
    var image=document.getElementById("image");
    var Output=document.getElementById("checkdate");
    Output.textContent="";
    image.style.display="block";
    delayFunc = setTimeout(Check, 3000);

  }

function Check(){
    
    var image=document.getElementById("image");
    image.style.display="none";
    var Output=document.getElementById("checkdate");
    Output.textContent="";
    var inputdate=document.querySelector("#date");
    var date=inputdate.value
    date=date.split("-").reverse().join("-")

    var checkPald=checkallformats(date)

    if(checkPald===false)
   {
    var datenext,dateprevious, paldDate;
    datenext=dateprevious=date,numberofdays=0;

    while(1)
     {
       numberofdays++;
       datenext=getNextDate(datenext)
       paldDate=checkallformats(datenext);
       if(paldDate!==false)
          break;
       
       dateprevious=getPreviousDate(dateprevious)
       paldDate=checkallformats(dateprevious);
       if(paldDate!==false)
          break;
        
       
     }

      Output.textContent="No it is not a pallindrome. Nearest Pallindrome Date: "+`${paldDate}`+" You missed it by: "+`${numberofdays}`+" days";
    }

    else
    {
      Output.textContent="Yay!! it is a pallindrome in format "+`${date}`;
    }
  }                 

function CheckPalindrome(str)
{

  var palindrome=true;
  str=str.split("-").join("")
  var n=str.length;
  for(var i=0;i<n/2;i++)
  {
      if(str[i]!==str[n-i-1])
       {palindrome=false;
       break;}
  }

  return palindrome;
   
}

function getNextDate(dateNext){
  var Months31=[1,3,5,7,8,10,12];
  var date=dateNext.split("-");
  var y=parseInt(date[2],10);
  var m=parseInt(date[1],10);
  var d=parseInt(date[0],10);
  if((d<28)||((d<29)&&(y%4===0)))
  {
    d=d+1;
  }
  else if((m===2) && ( ((d===28)&&(y%4!==0)) || ((d===29)&&(y%4===0)) ) )
  {
    d=1;
    m=m+1
  }
  else if(Months31.includes(m)===true){
      if(d<31)
       d=d+1;
      else if(m===12)
      {
        d=1;
        m=1;
        y=y+1;
      }
      else
       {
         d=1;
         m=m+1;
       }
    }
  else {
    if(d<30)
     d=d+1;
    else{
      d=1;
      m=m+1;
    }
  }

   if(m<10&&d<10) 
    date='0'+d+'-'+'0'+m+'-'+y;
   else if(d<10)
    date='0'+d+'-'+m+'-'+y;
   else if(m<10)
    date=d+'-'+'0'+m+'-'+y;
   else 
    date=d+'-'+m+'-'+y;

  return date;

  
}

function getPreviousDate(datePrevious){
  var Months31=[2,4,6,8,9,11,1];
  var date=datePrevious.split("-");
  var y=parseInt(date[2],10);
  var m=parseInt(date[1],10);
  var d=parseInt(date[0],10);
  if(d>1)
  {
    d=d-1;
  }
  else if(m===3)
  {
    if(y%4===0)
     d=29;
    else
     d=28;
   m=2;
  }
  else if(Months31.includes(m)===true)   
    {
      d=31
      if(m===1)
      { 
        m=12;
        y=y-1;
      }
      else
         m=m-1;
    }

  else {
    m=m-1;
    d=30;
    }

    if(m<10&&d<10) 
    date='0'+d+'-'+'0'+m+'-'+y;
   else if(d<10)
    date='0'+d+'-'+m+'-'+y;
   else if(m<10)
    date=d+'-'+'0'+m+'-'+y;
   else 
    date=d+'-'+m+'-'+y;

  return date;

  
}

function checkallformats(date){

  var Date=date.split("-");
    var y=Date[2];
    var m=Date[1];
    var d=Date[0];
    var date1=m+'-'+d+'-'+y, date2= d+'-'+m+'-'+y, date3=m+'-'+d+'-'+y[2]+y[3], date4=m[1]+'-'+d+'-'+y; //create an array
    var c1=CheckPalindrome(date1);
    var c2=CheckPalindrome(date2);
    var c3=CheckPalindrome(date3);
    if(m<10)
    var c4=CheckPalindrome(date4);
    else 
     c4=false

  if(c1===true) 
   {
     return date1;
   }
  else if(c2===true)
   {
     return date2;
   }
  else if(c3===true)
   {
     return date3;
   }
  else if(c4===true)
  {
    return date4;
  }
  else
   return false;


}


// function FindPallindromeDates(year){

//   var y=year.toString();
//   var m=y[3]+y[2], d=y[1]+y[0];
//   if(moment(`${d}/${m}/${y}`,'DD/MM/YYYY',true).isValid()===true)
//      {
//        nearestdate.date=`${d}/${m}/${y}`;
//       //  nearestdate.days=
//      }


// }
// if((!c1)&&(!c2)&&(!c3)&&(!c4)===true)
//     {
//       var nearestdate,palindromeFound=false;
//       while(palindromeFound!=true)
//       {  
//         yearNext++;
//         nearestdate=FindPallindromeDate(yearNext);
//         yearBack--;
//         nearestdate=FindPallindromeDate(yearBack);

//         if(datesarr.length!=0)
//          palindromeFound=true;
//       }

//       var nearestDate=find_NearestDate(datesarr,y)

//       Output.textContent="No it is not a pallindrome. Nearest Pallindrome Date: "+`${nearestDate[0]}`+"You missed it by:"+`${nearestDate[1]}`;
//     }

//     else
//     {
//       Output.textContent="Yes it is a pallindrome";
// }