
var bg1 =document.getElementById("bg1");
var bg2 =document.getElementById("bg2");
var bg3 =document.getElementById("bg3");
var bg4 =document.getElementById("bg4");
var main =document.getElementById("main");
var mheader =document.getElementById("mheader");
var mimg1 =document.getElementById("mimg1");
var mimg2 =document.getElementById("mimg2");
var mimg3 =document.getElementById("mimg3");
bg1.addEventListener("click",function(){
    main.style.display="block";
    mheader.textContent="Head Gear";
    mimg1.style.backgroundImage="url(imgs/gears/h1.png)";
    mimg2.style.backgroundImage="url(imgs/gears/h3.png)";
    mimg3.style.backgroundImage="url(imgs/gears/h2.png)";    
});
bg2.addEventListener("click",function(){
    main.style.display="block";
    mheader.textContent="Body Gear";
    mimg1.style.backgroundImage="url(imgs/gears/b1.png)";
    mimg2.style.backgroundImage="url(imgs/gears/b2.png)";
    mimg3.style.backgroundImage="url(imgs/gears/b3.png)";
});
bg3.addEventListener("click",function(){
    main.style.display="block";
    mheader.textContent="Leg Gear";
    mimg1.style.backgroundImage="url(imgs/gears/l1.png)";
    mimg2.style.backgroundImage="url(imgs/gears/l2.png)";
    mimg3.style.backgroundImage="url(imgs/gears/l3.png)";
});
bg4.addEventListener("click",function(){
    main.style.display="block";
    mheader.textContent="Foot Gear";
    mimg1.style.backgroundImage="url(imgs/gears/f1.png)";
    mimg2.style.backgroundImage="url(imgs/gears/f2.png)";
    mimg3.style.backgroundImage="url(imgs/gears/f3.png)";
});