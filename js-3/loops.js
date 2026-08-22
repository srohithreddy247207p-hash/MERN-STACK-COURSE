console.log("LOOPING AND AFunctions page");
let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);

for(let i=1;i<=100;i++){
    console.log(i);

}
 let obj={
    name:"jadal",
    roll:30,
    branch:"csc"

 }

for(const i in obj){
    const element=obj[i];

    console.log(i);
    console.log(obj[i]);
    console.log(i,obj[i]);
}


for (const i of "hello") {
    console.log(i);
}
let i=1;
while (i<30) {
    console.log('spidy');
    i++;
}

do {
    let i=1;
        console.log('spidy');
        i++;
} while (i<30);

let p=46872;
let q=4566653;
if(p>q?true:false){
    console.log('true');
}else{
    console.log(false);
}

let x="guava";
switch (x) {
    case "banana":
        console.log('this is banana');
        break;
    case "apple":
        console.log('this is an apple');
        break;

    default:
        console.log('i dont want it now')
        break;
}


for ( r=1; r<=100; r++) {
    if(r%8==0){
    console.log(r);    
}
}

function nice(a){
console.log('hey '  +a+ ' hi');
console.log('hey '  +a+ ' hi');
console.log('hey '  +a+ ' hi');
console.log('hey '  +a+ ' hi');
console.log('hey '  +a+ ' hi');
}
nice('man');
// console.log('hey');
// console.log('hey');
// console.log('hey');
// console.log('hey');
// console.log('hey');
function sum(a,b) {
    console.log(a+b);
}
total=sum(10,20)
console.log(total);

function sum2(a,b,c=3) {
    console.log(a+b+c);
}
sum2(1,2)

const name=()=>{
    console.log(' i am an arrow function')
}
name('hello')