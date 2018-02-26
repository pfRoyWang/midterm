var choice1=document.getElementById("choice1");
var choice2=document.getElementById("choice2");
var choice3=document.getElementById("choice3");
var choice4=document.getElementById("choice4");
var prev =document.getElementById("prevb");
var next =document.getElementById("nextb");
var num =1

prev.addEventListener("click",function(){
    if (choice1.checked){        document.getElementById("h1ri").style.backgroundImage="url(imgs/gears/h"+num+".png)";   
    }else if(choice2.checked){        document.getElementById("b1ri").style.backgroundImage="url(imgs/gears/b"+num+".png)";
    }else if(choice3.checked){        document.getElementById("l1ri").style.backgroundImage="url(imgs/gears/l"+num+".png)";
    }else if(choice4.checked){        document.getElementById("f1ri").style.backgroundImage="url(imgs/gears/f"+num+".png)";
    }else{
        alert("Choose one!");
    }
    num--;
    if(num>4){
        num =1;
    }
    if(num<1){
        num=4;
    }
});
next.addEventListener("click",function(){
    if (choice1.checked){        document.getElementById("h1ri").style.backgroundImage="url(imgs/gears/h"+num+".png)";
    }else if(choice2.checked){        document.getElementById("b1ri").style.backgroundImage="url(imgs/gears/b"+num+".png)";
    }else if(choice3.checked){        document.getElementById("l1ri").style.backgroundImage="url(imgs/gears/l"+num+".png)";
    }else if(choice4.checked){        document.getElementById("f1ri").style.backgroundImage="url(imgs/gears/f"+num+".png)";
    }else{
        alert("Choose one!");
    }
    num++;
    if(num>4){
        num =1;
    }
    if(num<1){
        num=4;
    }
});