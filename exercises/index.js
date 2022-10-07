let array=[1,2,2,2,4,4,4,5,6,7,33,44,55,55] //-> [1,2,4,5,6,7,33,44,55,-1,-1,-1,-1,-1]
let n=array.length;
let i=0;
 array=array.filter( (a,index)=>{
return array.indexOf(a)==index;
})
console.log("newAr",newAr)
let diffSize=n-array.length;
let additiionA=new Array(diffSize).fill(-1);
let result=newAr.concat(...additiionA)
console.log(result)