var content=document.createElement("div");
content.innerHTML="Hard Level"
root.appendChild(content)

var div1 = document.createElement('div');
div1.setAttribute('id','row1');
root.appendChild(div1);

var div1_1 = document.createElement('div');
div1_1.setAttribute("class","cell")
div1_1.setAttribute("id","row11")
//array.push(randomnumber)
div1_1.innerHTML="1";
var row=1;
var column=1;
//div1_1.addEventListener("click",exchange(div1_1,div))
///div1_1.setAttribute("onclick","alert("hi")
console.log(div1_1.id)
div1.appendChild(div1_1);

var div1_2 = document.createElement('div');
div1_2.setAttribute("class","cell")
div1_2.setAttribute("id","12")
div1_2.innerHTML="7";
console.log(div1_2.innerHTML)
var row=1;
var column=2;
div1.appendChild(div1_2);

var div1_3 = document.createElement('div');
div1_3.innerHTML="2";
div1_3.setAttribute("id","row13")
var row=1;
var column=3;
div1.appendChild(div1_3);

var div1_4 = document.createElement('div');
div1_4.innerHTML="3";
div1_4.setAttribute("id","row14")
var row=1;
var column=4;
div1.appendChild(div1_4);

var div1_5 = document.createElement('div');
div1_5.innerHTML="10";
div1_5.setAttribute("id","row15")
var row=1;
var column=4;
div1.appendChild(div1_5);

//ROW2 STARTS
var div2 = document.createElement('div');
div2.setAttribute('id','row2');

root.appendChild(div2);

var div2_1 = document.createElement('div');
div2_1.innerHTML="5";
div2_1.setAttribute("id","row21")
var row=2;
var column=1
div2.appendChild(div2_1);

var div2_2 = document.createElement('div');
div2_2.innerHTML="9";
div2_2.setAttribute("id","row22")
var row=2;
var column=2
div2.appendChild(div2_2);

var div2_3 = document.createElement('div');
div2_3.innerHTML="6";
div2_3.setAttribute("id","row23")
var row=2;
var column=3;
div2.appendChild(div2_3);

var div2_4 = document.createElement('div');
div2_4.innerHTML="8";
div2_4.setAttribute("id","row24")
var row=2;
var column=3
div2.appendChild(div2_4);

var div2_5 = document.createElement('div');
div2_5.innerHTML="4";
div2_5.setAttribute("id","row25")
var row=2;
var column=3
div2.appendChild(div2_5);



var div3 = document.createElement('div');
div3.setAttribute('id','row3');
root.appendChild(div3);

var div3_1 = document.createElement('div');
div3_1.innerHTML=" 13";
div3_1.setAttribute("id","row31")
var row=3;
var column=1;
div3.appendChild(div3_1);

var div3_2 = document.createElement('div');
div3_2.innerHTML=" ";
div3_2.setAttribute("id","row32")
var row=3;
var column=2;
div3.appendChild(div3_2);

var div3_3 = document.createElement('div');
div3_3.innerHTML=" 21";
div3_3.setAttribute("id","row33")
var row=3;
var column=3;
div3.appendChild(div3_3);

var div3_4 = document.createElement('div');
div3_4.innerHTML="15";
div3_4.setAttribute("id","row34")
div3.appendChild(div3_4);


var div3_5 = document.createElement('div');
div3_5.innerHTML="19";
div3_5.setAttribute("id","row35")
div3.appendChild(div3_5);

var div4 = document.createElement('div');
div4.setAttribute('id','row4');
var row=3;
var column=4;
root.appendChild(div4);

var div4_1 = document.createElement('div');
div4_1.innerHTML=" 14";
div4_1.setAttribute("id","row41")
var row=4;
var column=1;
div4.appendChild(div4_1);

var div4_2 = document.createElement('div');
//div4_2.setAttribute("id","row4col2")
div4_2.setAttribute("id","row42")
//var a=div4_2.addEventListener("onload",random());

div4_2.innerHTML="20";
var row=4;
var column=2;
div4.appendChild(div4_2);

var div4_3 = document.createElement('div');
div4_3.innerHTML="18";
div4_3.setAttribute("id","row43")
var row=4;
var column=3;
div4.appendChild(div4_3);

var div4_4 = document.createElement('div');
div4_4.innerHTML="12";
div4_4.setAttribute("id","row44")
var row=4;
var column=4;
div4.appendChild(div4_4);

var div4_5 = document.createElement('div');
div4_5.innerHTML="11";
div4_5.setAttribute("id","row45")
var row=4;
var column=4;
div4.appendChild(div4_5);


var div5 = document.createElement('div');
div5.setAttribute('id','row5');
var row=3;
var column=4;
root.appendChild(div5);



var div5_1 = document.createElement('div');
div5_1.innerHTML=" 22";
div5_1.setAttribute("id","row51")

div5.appendChild(div5_1);

var div5_2 = document.createElement('div');
//div4_2.setAttribute("id","row4col2")
div5_2.setAttribute("id","row52")
//var a=div4_2.addEventListener("onload",random());

div5_2.innerHTML="24";
var row=4;
var column=2;
div5.appendChild(div5_2);

var div5_3 = document.createElement('div');
div5_3.innerHTML="16";
div5_3.setAttribute("id","row53")
var row=4;
var column=3;
div5.appendChild(div5_3);

var div5_4 = document.createElement('div');
div5_4.innerHTML="23";
div5_4.setAttribute("id","row54")
var row=4;
var column=4;
div5.appendChild(div5_4);

var div5_5 = document.createElement('div');
div5_5.innerHTML="17";
div5_5.setAttribute("id","row55")
var row=4;
var column=4;
div5.appendChild(div5_5);












var rightdiv=document.createElement("div")
rightdiv.setAttribute("class","right")
rightdiv.setAttribute("id","counter")
//rightdiv.innerHTML="askhsa"
maindiv.appendChild(rightdiv)

var start=document.createElement("button")
//start.setAttribute("href","#")
start.setAttribute("id","starttimer")
start.setAttribute("class","myButton")
start.innerHTML="Start"

start.addEventListener("click",play)
start.addEventListener("click",timer)
root.appendChild(start)



var reset=document.createElement("button")
reset.setAttribute("href","#")
reset.setAttribute("class","myButton")
reset.innerHTML="Reset"
reset.addEventListener("click",resetfn)
 
root.appendChild(reset)



var count=0;


//logic
function play(){

    div1_1.setAttribute("onclick","exchange(div1_1,div1_2,div2_1)")
div1_4.setAttribute("onclick","exchange_four(div1_4,div1_3,div2_4,div1_5)")
div4_1.setAttribute("onclick","exchange_three(div4_1,div3_1,div4_2,div5_1)")
div4_4.setAttribute("onclick","exchange_four(div4_4,div3_4,div4_3,div5_4,div4_5)")
div1_5.setAttribute("onclick","exchange(div1_5,div1_4,div2_5)");
div2_5.setAttribute("onclick","exchange_three(div2_5,div2_4,div1_5,div3_5)")
div3_5.setAttribute("onclick","exchange_three(div3_5,div2_5,div4_5,div3_4)")
div4_5.setAttribute("onclick","exchange_three(div4_5,div3_5,div5_5,div4_4)")
div5_5.setAttribute("onclick","exchange(div5_5,div4_5,div5_4)")
div5_1.setAttribute("onclick","exchange(div5_1,div4_1,div5_2)")
div5_4.setAttribute("onclick","exchange_three(div5_4,div5_5,div5_3,div4_4)")
div5_3.setAttribute("onclick","exchange_three(div5_3,div5_4,div5_2,div4_3)")
div5_2.setAttribute("onclick","exchange_three(div5_2,div5_3,div5_1,div4_2)")


div2_2.setAttribute("onclick","exchange_four(div2_2,div2_1,div2_3,div3_2,div1_2)")
div2_3.setAttribute("onclick","exchange_four(div2_3,div2_2,div2_4,div1_3,div3_3)")
div3_2.setAttribute("onclick","exchange_four(div3_2,div2_2,div3_3,div3_1,div4_2)")
div3_3.setAttribute("onclick","exchange_four(div3_3,div2_3,div4_3,div3_2,div3_4)")

div1_2.setAttribute("onclick","exchange_three(div1_2,div1_1,div1_3,div2_2)");
div1_3.setAttribute("onclick","exchange_three(div1_3,div1_2,div1_4,div2_3)");
div2_1.setAttribute("onclick","exchange_three(div2_1,div1_1,div3_1,div2_2)");
div2_4.setAttribute("onclick","exchange_four(div2_4,div1_4,div3_4,div2_3,div2_5)");
div3_1.setAttribute("onclick","exchange_three(div3_1,div3_2,div2_1,div4_1)");
div3_4.setAttribute("onclick","exchange_four(div3_4,div2_4,div4_4,div3_3,div3_5)");
div4_2.setAttribute("onclick","exchange_four(div4_2,div3_2,div4_1,div4_3,div5_2)");
div4_3.setAttribute("onclick","exchange_four(div4_3,div3_3,div4_2,div4_4,div5_3)");

   
}

function timer()
{
    count++;
    
    if(count==1){
    var seconds=60;
    var mins=0
    //console.log("shkash")
    function go() {
        var counter = document.getElementById("counter");
        var minutes = mins;
        seconds--;
        counter.innerHTML = "Time Left : "+minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(go, 1000);
        } 
        if(counter.innerHTML=="Time Left : 0:00")
    {
        console.log("aslxaldlajaawj")
        points();
    }
    }
    go();
    
}

}


function resetfn(){
   
    
    //window.location.reload();
    
   /* clearTimeout(timeoutHandle) 
    counter.innerHTML=""
 //    setTimeout(timeoutHandle)
 //timer()
    root.innerHTML=""  
//window.location.reload();
//root.location.reload();
var script = document.createElement('script'); 
    script.src =  
    "C:\\Users\\User\\Desktop\\Vikram_April-2020\\guvi\\Hackathon\\hard.js"; 
    var link=document.createElement("link")
    link.setAttribute("rel","stylesheet")
    link.setAttribute("href","C:\\Users\\User\\Desktop\\Vikram_April-2020\\guvi\\Hackathon\\hardstyle.css")
    document.head.appendChild(link)
              
            document.body.appendChild(script) 

*/
window.location.reload();





    
}















function exchange(element1id,element2id,element3id)
{
    console.log(element1id.innerHTML);
    console.log(element2id.innerHTML)
    if(element2id.innerHTML==" ")
    {
        swap(element1id,element2id)
    }
    if(element3id.innerHTML==" ")
    {
        swap(element1id,element3id)
    }
  

}

function exchange_four(element1id,element2id,element3id,element4id,element5id)
{
    if(element2id.innerHTML==" ")
    {
        swap(element1id,element2id)
    }
    if(element3id.innerHTML==" ")
    {
        swap(element1id,element3id)
    }
    if(element4id.innerHTML==" ")
    {
        swap(element1id,element4id)
    }
    if(element5id.innerHTML==" ")
    {
        swap(element1id,element5id)
    }

}

function exchange_three(element1id,element2id,element3id,element4id)
{
    if(element2id.innerHTML==" ")
    {
        swap(element1id,element2id)
    }
    if(element3id.innerHTML==" ")
    {
        swap(element1id,element3id)
    }
    if(element4id.innerHTML==" ")
    {
        swap(element1id,element4id)
    }
}








/*




 var getrow=this.row;
    var getcolumn=this.column
    console.log(getrow)
    console.log(getcolumn)
    console.log(elementid)
 
  console.log(elementid.innerHTML)
  var getid=elementid.id
  var gettext=getid.innerHTML
  if(getrow==1&& getcolumn==1)
  { 
     var checkrightcolumn=getcolumn+1 
     var checkright=elementid.nextSibling
     console.log(String(getrow)+String(checkrightcolumn))
     if(checkright.innerHTML==" ")
     {
         swap(getid,checkright)
     }

  }
  

}*/

function swap(id1,id2)
{
   console.log("hi")
    /*var temptext=id1.innerHTML;
    id1.innerHTML=id2.innerHTML
    id2.innerHTML=id1.innerHTML
    */
   var a=id1.innerHTML
   var b=id2.innerHTML
   id2.innerHTML=a;
   id1.innerHTML=b;
    
    
}



function points()
{

var points=0;
var rowdiv1=div1.getElementsByTagName("div")
console.log(rowdiv1)
var firstrowpoint=1;
for(var i=0;i<rowdiv1.length;i++)
{
    //console.log(points)
   
    if(rowdiv1[i].innerHTML==firstrowpoint)
    {
        console.log(rowdiv1[i].innerHTML)
        points++
        console.log(points)
        firstrowpoint++
    }
    else{
        firstrowpoint++
    }
}

var rowdiv2=div2.getElementsByTagName("div")
//console.log(rowdiv2.innerHTML)
var secondrowpoint=6
for(var i=0;i<rowdiv2.length;i++)
{
    
    if(rowdiv2[i].innerHTML==secondrowpoint)
    {
        
        points++
        console.log(points)
        secondrowpoint++
    }
    else{
        secondrowpoint++;
    }
}
var rowdiv3=div3.getElementsByTagName("div")
var thirdrowpoint=11
for(var i=0;i<rowdiv3.length;i++)
{
    
    if(rowdiv3[i].innerHTML==thirdrowpoint)
    {
        thirdrowpoint++
        points++
    }
    else{
        thirdrowpoint++
    }
}
var rowdiv4=div4.getElementsByTagName("div")
var fourthrowpoint=16
for(var i=0;i<rowdiv4.length;i++)
{
   
    if(rowdiv4[i].innerHTML==fourthrowpoint)
    {
        fourthrowpoint++
        points++
    }
    else{
        fourthrowpoint++
    }
    
}
var rowdiv5=div5.getElementsByTagName("div")
var fifthrowpoint=21
for(var i=0;i<rowdiv5.length;i++)
{
    
    if(rowdiv5[i].innerHTML==fifthrowpoint)
    {
        fifthrowpoint++
        points++
    }
    else{
        fifthrowpoint++
    }
}
if(points==24)
{
    root.innerHTML=""
    alert("You Win!!!!!...You are going to next level")
    alert("POINTS SCORED IN THIS LEVEL "+points)
    var script = document.createElement('script'); 
    script.src =  
    "advanced.js"; 
    var link=document.createElement("link")
    link.setAttribute("rel","stylesheet")
    link.setAttribute("href","advancedstyle.css")
    document.head.appendChild(link)
              
            document.body.appendChild(script) 

}
else{
    alert("GAME OVER......")
alert("POINTS SCORED"+points)

}



}














