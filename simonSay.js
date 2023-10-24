gameSeq=[];
userSeq=[];
let press="false";
let auto="false";
let level=0;
let started="false";
let btn;
let lev=document.querySelector(".level");
let Btn=document.querySelectorAll(".same");
let Btns=["one","two","three","four"];
document.addEventListener("click",function(){
    if(started=="false"){
        started="true";
        auto="true";
        console.log("game started");
    }

    levelUp();
})
 function gameflash(btn){
    console.log(btn);
    btn.style.background="white";
    console.log(btn);
    setTimeout(function() {
        btn.style.background="";
    }, 200);
    auto="false";
 }
 function levelUp(){
    level++;
    lev.innerHTML=`Level ${level}`;
    let num=Math.floor(Math.random()*3);
    let btn=Btn[num];
    // let btn=document.querySelector(".btn3");
    console.log(btn);
    gameflash(btn);

}

 function userflash(btn2){
    btn2.style.background="green";
    console.log(btn2);
    setTimeout(function() {
        btn2.style.background="";
    }, 200);
    press="false";
}
    // function levelUp(){
//     level++;
//     lev.innerHTML=`Level ${level}`;
//     let num=Math.floor(Math.random()*3);
//     let btn3=Btns[num];
//     console.dir(btn3);
//     let btn=document.querySelector(`.${btn3}`)
//     console.log(btn);
//     gameflash(btn);

// }
function btnpress(){
    let btn2=this;
    if(auto=="false"){
    userflash(btn2);
    }
}
let prebtn=document.querySelectorAll(".same");
for(btn1 of prebtn){
btn1.addEventListener("click",btnpress)
}