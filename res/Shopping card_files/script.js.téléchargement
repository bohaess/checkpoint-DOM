/*var btnAdd=document.getElementsByClassName("add-btn")[0];
var btnSub=document.getElementsByClassName("sub-btn")[0];
var price1=document.getElementsByClassName("price")[0];
var total=document.getElementById("total");
var input=document.getElementById("input");


    
    btnAdd.addEventListener("click",()=>{
        var  tot=parseInt(total.innerHTML);
        var price=parseInt(price1.innerHTML);
        input.value = parseInt(input.value)+1;
        total.innerHTML=tot+price+" DT";
        
   })
    btnSub.addEventListener("click",(e)=>{
        if(parseInt(total.innerHTML)>0) {
        var  tot=parseInt(total.innerHTML);
        var price=parseInt(price1.innerHTML);
        input.value = parseInt(input.value)-1;
        total.innerHTML=tot-price+"DT";
        }
        else {
            e.preventDefault();
        }
 })*/

var total=document.getElementById("total");
//var tot=total.innerHTML;
var addTab=[...document.getElementsByClassName("add-btn")];
var subTab=[...document.getElementsByClassName("sub-btn")];
var priceTab=[...document.getElementsByClassName("price")]
var inpTab=[...document.getElementsByClassName("input")];

   for(let i =0 ; i< addTab.length ; i++){
     
            addTab[i].addEventListener("click",()=>{
                inpTab[i].value=parseInt(inpTab[i].value)+1;
                total.innerHTML=parseInt(total.innerHTML)+parseInt(priceTab[i].innerHTML)+"DT";
        });
        subTab[i].addEventListener("click",(e)=>{
            console.log(inpTab[i].value);
            if(parseInt(inpTab[i].value)>0) {
                inpTab[i].value=parseInt(inpTab[i].value)-1;
                total.innerHTML=parseInt(total.innerHTML)-parseInt(priceTab[i].innerHTML)+"DT";
                }
        } )
    }  
 
///map()
 ///child.emove()
var descr=document.getElementsByClassName("description");
 var descTab=[...descr];


var items=document.getElementsByClassName("item");
var itemTab=[...items];
var btnsDel=document.getElementsByClassName("btn-delete");
var btnDelTab=[...btnsDel];
var btnsLike=document.getElementsByClassName("btn-like");
var btnlikeTab=[...btnsLike];

for(let i=0;i<itemTab.length;i++) {
    btnDelTab[i].addEventListener("click",()=>{
        itemTab[i].remove();
    })
    btnlikeTab[i].addEventListener("click",()=>{
        btnlikeTab[i].style.color="red";
       alert(`Good choice !${descTab[i].childNodes[1].textContent} is really very performant and has a good efficience ! `)
    })
}