 let arr=[1,2,3,4];
 for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]*arr[i]);
 }
console.log('------------------------------')
 let arr1=[1,2,3,4,5,6,7,8];
 let n=arr1.length;
 for(let i=1;i<=n;i+=2){
    console.log(arr1[i]*arr1[i]);
 }
console.log('------------------------------')

 let arr2=[1,2,3,4,5];
 for(let i=arr2.length-1;i>=0;i--){
    console.log(arr2[i]+1);
 }
console.log('------------------------------')

let arr3=[1,2,3,4,5,6];
for(let i=arr3.length-1;i>=0;i--){
    console.log(arr3[i]);
}
console.log('------------------------------')

let arr4='*';
let k=5;
for( let i=0;i<=k;i++){
    console.log("*".repeat(i));
}
console.log('------------------------------')

var myarr=[1,2,'gfd','rdifk',5];
myarr.forEach(function (element){
    console.log(element);
});
console.log('------------------------------')

var myarray=[1,2,3,4,5];
for(var element of myarray){
    console.log(element);
}
console.log('------------------------------')

function multiple(i){
    console.log(i);
}
ar=[1,2,3,4,5];
let a2=ar.map(multiple);
// ar.map(multiple);
console.log('------------------------------')

arr11=[1,2,3,4,5];
let a3=arr11.map(function (i){
    return i**2;
});
console.log(arr11,a3);
let array3=arr11.filter (function(i){
    return i%2===0;
})
console.log(arr11,array3);
let sum=arr11.reduce(function (a,c){
    return a+c;
},0)
console.log(arr11,sum)
console.log('------------------------------')

let sum2=(a,b)=>{
    return a+b;
}
console.log(arr11.reduce(sum2));
console.log('------------------------------')



// function fac(n){
//     fact=1
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//     }
// }
// let as=[5,4,7,5,2,3];
// y=as.length
// for(let i=0;i<=y;i++){
//     console.log(fac(as[i]));
// }