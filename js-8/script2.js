let btn=document.getElementById("btn");
btn.addEventListener("click",()=> {
    document.querySelector(".box").innerHTML="<b>i have created </b>"
})
btn.addEventListener("contextmenu",()=> {
    alert("dont hack by right click")
})
document.addEventListener("keydown",e=>{
    console.log(e.key)
})