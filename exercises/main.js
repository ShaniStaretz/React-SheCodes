// function myFunc(value,index=2,array){
//     return value>90
// }

// var grades=[89,94,72,100,85];
// var highGrade=grades.find(myFunc)
// console.log(`high grade: ${highGrade}`)

// const dailyManufacture = [
//     {name: "pesek zman", type: "chocolate", value: 5000},
//     {name: "mekupelet", type: "chocolate", value: 650},
//     {name: "tofee", type: "candy", value: 10},
//     {name: "cookie", type: "choolate chip", value: 1200},
//     {name: "taami", type: "chocolate", value: 77}
//   ]
//   let dailyTotal=dailyManufacture.filter(x=>x.type==="chocolate").map(x=>x.value).reduce((total,value)=>total+value);
//   console.log(dailyTotal)


//   /* exercise 1 */
// var sizes = ['S', 'M', 'L', 'XL'];
// var newSizesArray = [...sizes];
// console.log(newSizesArray);

// /* exercise 2 */
// var alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);

// /* exercise 3 */
// var max = Math.max(..."65432");
// console.log(max);

// /* exercise 4 */
// const country = "USA";
// console.log([...country]);

// /* exercise 5 */
// var newArray = Array(...[,,]);
// console.log(newArray);
const map1 = new Map();
let firstWord="bbc"
let firstWord2="bbd"
let secondWord="bc"
let word="*b*";
let vNotStar=word.match(/[^*]/g)[0]
// console.log(vNotStar)
let wordSize=word.length;
var countStar = (word.match(/[*]/g) || []).length;

map1.set(firstWord.length,addToSet(firstWord))
// console.log(map1)
map1.set(secondWord.length,addToSet(secondWord))
map1.set(firstWord.length,addToSet(firstWord2))

// map1.set(firstWord2.length, ;
console.log(map1)

function addToSet(word){
let words;
words=map1.get(word.length)
if(!!words){
  // console.log(words);
  words.push(word)
  // console.log(words);
}
else
{
  words=([word])
}
return words;




return words;
}

function findStarWord(word){

  let words=map1.get(word.length)
  // console.log(words)
  let pattern=/a/;
  
let res=(words.join('')).match(pattern)
  return !!res
//  let ishas= words.has(vNotStar)
//   console.log(ishas)
}
findStarWord(word)
console.log(findStarWord(word))

