
var x = document.createElement("audio");
x.setAttribute("src","Waltz-music-loop.mp3");
x.setAttribute("allow","autoplay")
x.setAttribute("autoplay","autoplay")
x.setAttribute("hidden","true")
root.appendChild(x)
/*myMusic = new sound("gametheme.mp3");
myMusic.play();*/

var content=document.createElement("div");
content.innerHTML="Easy Level"
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
div1_2.innerHTML="2";
console.log(div1_2.innerHTML)
var row=1;
var column=2;
div1.appendChild(div1_2);

var div1_3 = document.createElement('div');
div1_3.innerHTML="3";
div1_3.setAttribute("id","row13")
var row=1;
var column=3;
div1.appendChild(div1_3);



//ROW2 STARTS
var div2 = document.createElement('div');
div2.setAttribute('id','row2');

root.appendChild(div2);

var div2_1 = document.createElement('div');
div2_1.innerHTML="4";
div2_1.setAttribute("id","row21")
var row=2;
var column=1
div2.appendChild(div2_1);

var div2_2 = document.createElement('div');
div2_2.innerHTML="5";
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




var div3 = document.createElement('div');
div3.setAttribute('id','row3');
root.appendChild(div3);

var div3_1 = document.createElement('div');
div3_1.innerHTML=" 7";
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
div3_3.innerHTML="8";
div3_3.setAttribute("id","row33")
var row=3;
var column=3;
div3.appendChild(div3_3);



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
//div1_3.setAttribute("onclick","exchange(div1_4,div1_3,div2_4)")
//div4_1.setAttribute("onclick","exchange(div4_1,div3_1,div4_2)")
//div4_4.setAttribute("onclick","exchange(div4_4,div3_4,div4_3)")


div2_2.setAttribute("onclick","exchange_four(div2_2,div2_1,div2_3,div3_2,div1_2)")
div2_3.setAttribute("onclick","exchange_three(div2_3,div2_2,div1_3,div3_3)")
div3_2.setAttribute("onclick","exchange_three(div3_2,div2_2,div3_3,div3_1)")
div3_3.setAttribute("onclick","exchange(div3_3,div2_3,div3_2)")

div1_2.setAttribute("onclick","exchange_three(div1_2,div1_1,div1_3,div2_2)");
div1_3.setAttribute("onclick","exchange(div1_3,div1_2,div2_3)");
div2_1.setAttribute("onclick","exchange_three(div2_1,div1_1,div3_1,div2_2)");
//div2_4.setAttribute("onclick","exchange_three(div2_4,div1_4,div3_4,div2_3)");
div3_1.setAttribute("onclick","exchange(div3_1,div3_2,div2_1)");
//div3_4.setAttribute("onclick","exchange_three(div3_4,div2_4,div4_4,div3_3)");
//div4_2.setAttribute("onclick","exchange_three(div4_2,div3_2,div4_1,div4_3)");
//div4_3.setAttribute("onclick","exchange_three(div4_3,div3_3,div4_2,div4_4)");


}

function timer()
{
    count++;
    
    if(count==1){
    var seconds=15;
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
function call(ap)
{
    if(ap==8)
    {

    }
    else{
        go();
    }
}


function resetfn(){
   
window.location.reload();
root.innerHTML=""
    
//alert("You Win!!!! You are going to next level")
//option2.setAttribute("selected","selected")
var script = document.createElement('script'); 
      
      script.src =  
    "easy.js"; 
    var link=document.createElement("link")
    link.setAttribute("rel","stylesheet")
    link.setAttribute("href","easystyle.css")
    document.head.appendChild(link)
              
            document.body.appendChild(script) 
  

    
}















function exchange(element1id,element2id,element3id)
{
    //console.log(element1id.innerHTML);
    //console.log(element2id.innerHTML)
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
        firstrowpoint=firstrowpoint+1
        console.log(firstrowpoint)
    }
    else{
        console.log(firstrowpoint)
        console.log(rowdiv1[i].innerHTML)
        firstrowpoint++
    }
}

var rowdiv2=div2.getElementsByTagName("div")
//console.log(rowdiv2.innerHTML)
var secondrowpoint=4
for(var i=0;i<rowdiv2.length;i++)
{
    
    if(rowdiv2[i].innerHTML==secondrowpoint)
    {
        console.log(rowdiv2[i].innerHTML)
        
        points++
        console.log(points)
        secondrowpoint++
    }
    else{
        console.log(rowdiv2[i].innerHTML)
        secondrowpoint++;
    }
}

var rowdiv3=div3.getElementsByTagName("div")
//console.log(rowdiv2.innerHTML)
var thirdrowpoint=7
for(var i=0;i<rowdiv3.length;i++)
{
    
    if(rowdiv3[i].innerHTML==thirdrowpoint)
    {
        console.log(rowdiv3[i].innerHTML)
        
        points++
        console.log(points)
        thirdrowpoint++
    }
    else{
        console.log(rowdiv3[i].innerHTML)
        thirdrowpoint++;
    }
}
if(points==8)
{
    var ap=points;
    call(ap)
    root.innerHTML=""
    
    alert("You Win!!!! You are going to next level")
    alert("POINTS SCORED IN THIS LEVEL "+points)
    //option2.setAttribute("selected","selected")
    var script = document.createElement('script'); 
          
          script.src =  
        "medium.js"; 
        var link=document.createElement("link")
        link.setAttribute("rel","stylesheet")
        link.setAttribute("href","style.css")
        document.head.appendChild(link)
                  
                document.body.appendChild(script) 
      
}
else{

alert("GAME OVER......")
alert("POINTS SCORED IN THIS LEVEL "+points)

}
}























