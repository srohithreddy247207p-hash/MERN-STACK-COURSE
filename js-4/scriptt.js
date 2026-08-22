function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}

mean(1,2,3,4,5)

//arrow function
const  name=(a,b,c,d,e)=>{
    console.log((a+b+c+d+e)/5);
    
}
name(1,2,3,4,5)

const square=(x)=>{
    return x*x;
}
b=square(5);
console.log(b);

//arrow in single line
const squ2=x=>x*x;


//nested function
function outer(){
    console.log("outer function running...");
    function inner(){
        console.log("inner function running...");
    }
    inner();
}
outer();

//strings
let str1="namasthe";
let str2=" guru";
console.log(str1.length);
console.log(str1+str2);
let a="sFGk jhjf sn";
console.log(a.indexOf("j"));
console.log(a.slice(0,4));
console.log(a.replace("jhjf","akai"));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim());
console.log(a.split(" "));

//backtick
let g=`"this is not good"`;
console.log(g);

//template intervels

let msg=`hello, world`;
console.log(msg);
//string interpolaton
let d=10;
let i=5;
let c=d+i;
console.log(`the sum of ${d} and ${i} is ${d+i}`);

console.log(`shfgljnr\n,5yr`);
let mes=`this is line 1
     this is line 2
this is line 3`;
console.log(mes);

let boom="abinav";
let age=22;

let html=`
<div>
<h2>${boom}</h2>
<p> Age:${age}</p>
</div>
`;
console.log(html);

//arrays
var guru=[1,"hello",[2,3]];
guru.splice(1,1,"hello world",[4,5]);
console.log(guru);
