let boxes = document.getElementsByClassName("box");
boxes[2].style.backgroundColor="green";
document.getElementById("blue").style.backgroundColor="blue"
document.querySelector(".box").style.backgroundColor="coral";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box")[1].style.backgroundColor="yellow";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow"
})