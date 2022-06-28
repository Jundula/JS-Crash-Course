// var names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// }

// console.log(golfScore(9, 13));

// function testSwitch(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//     default:
//       answer = "wrong entry";
//   }
//   return answer;
// }
// console.log(testSwitch("ton bouy"));

// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {

//   if (myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp];
//   } else {
//     return "Not Found";
//   }
// }

// console.log(checkObj("gift"));

// var myArray = [ 2 ,3 ,4 ,5];
// var myTot = 0;

// for (var i = 0 ; i < myArray.length ; i++){
//     myTot += myArray[i];

// }

// console.log(myTot)

//  function addition(n1, n2){
//     return n1 + n2;
//  }

//  console.log(addition(3,5));

//  function convertSecond(h){
//     return h*3600
//  }
//  console.log(convertSecond(2));

//  function calculPeri(l,L){
//     return 2*l+2*L
//  }
//  console.log(calculPeri(2,5));

//  function calculAreaTriangle(b,h){
//     return 0.5 * b * h
//  }
//  console.log(calculAreaTriangle(20,20));

//  var fruit =""
//  function appendFrontend(fruit){
//     return fruit+"Frontend"
//  }
//  console.log(appendFrontend("Banana"));

// function checkGreater100(a,b){
//     return a+b >100 ? true : false;
// }

// console.log(checkGreater100(50,60))

// function lessOrEqual0(b){
//     return b <= 0 ;
// }

// console.log(lessOrEqual0(-5))

// function returnOpposite(bool){
//     return bool == true ? false : true;
// }
// console.log(returnOpposite(true));

// var fruit =""
// function appendFrontend(fruit){
//    return fruit+"Frontend"
// }
// console.log(appendFrontend("Banana"));

// function isNot0(n){
//     return n !== 0 ;
// }
// console.log(isNot0(0));

// function remainder(a,b){
//     return a % b ;
// }
// console.log(remainder(8,7));

// // function isOdd(a){
// //     for (var i =2 ; i< 10  ; i++){
// //         return (a % i ) == 0 ? false : true;
// //     }

// // }

// // console.log(isOdd(2));

// function isOdd(a){

//         return (a % 2  === 0) ? false : true;

// }

// console.log(isOdd(50));

// function isEven(a){

//         return (a % 2  === 0) ? 1 : -1;

// }

// console.log(isEven(51));

// function isLoggedAndSubscribed(log,sub){
//     return log=="LOGGED_IN" && sub=="SUBSCRIBED";
// }

// console.log(isLoggedAndSubscribed("LOGGED_IN","SUBSCRIBED"));

// // function filterFalsy(a,b){
// //     return a === true ? b: a ;
// // }

// // console.log(filterFalsy(null,'Dog'));

// function filterFalsy(a,b){
//     return a  ? b: a ;
// }

// console.log(filterFalsy(10,5));

// function   arrLength(arr){
//     return arr.length
// }
// console.log(arrLength([1,2,3]));

// function   arrLast(arr){
//     return arr[arr.length - 1]
// }
// console.log(arrLast([25,26,89,35]));

// function   arrSum(arr){
//     var arrsum = 0;

//     for (var i =0 ; i < arr.length ; i++){

//         arrsum += arr[i];
//     }
//     return arrsum
// }
// console.log(arrSum([2,2,2]));

// function   progSum(a){
//     let  prgSumTot = 0;

//     for (var i =0 ; i < a+1 ; i++){

//         prgSumTot += i ;
//     }
//     return prgSumTot
// }
// console.log(progSum(5));

// function convertMinSec(s){
//     let  min = Math.floor(s/60);
//     let  sec = s%60;

//     if (min.toString().length === 1 ){

//         return "0" + min + ":" + sec;
//     }
//     return min + ":" + sec;

// }

//  console.log(convertMinSec(450));

// function getMax(arr){
//     let max = 0

//     for (var i =0 ; i < arr.length ; i++){

//        if( arr[i]< arr[i+1]){

//            max = arr[i+1] ;
//        }
//     }

//     return max;

// }

// console.log(getMax([5,85,58,699,5248,8]))

// function reverseString(str){
//     reverseStr="";
//     for (var i =str.length -1 ; i >= 0 ; i--){

//         reverseStr += str[i]  ;
//      }
//     return reverseStr
// }
// console.log(reverseString("abc"))

// function reverseArr(arr){

//      return arr.split().reverse().join();
// }
// console.log(reverseString("abc"))

// function convertToZero(arr){
//     for (let i =0 ; i < arr.length ; i++){

//     arr[i] = 0 ;

//     }
//     return arr
// }
// console.log(convertToZero([1,56,89,34]))

// function convertTo0(arr){
//     return Array(arr.length).fill(0)
// }
// console.log(convertTo0([1,56,89,34,85]))

// function convertToZ(arr){
//     return arr.map(Elem => 0)

//     // return arr.map(Elem => {
//     //     return 0 })
// }
// console.log(convertToZ([1,56,89,34,85,78,6,2]))

// function removeApple(arr){
//     let newArr=[]
//     for (let i =0 ; i < arr.length ; i++){

//         if (arr[i] !== "Apple"){
//             newArr.push( arr[i]);
//         }

//     }
//     return newArr;
// }
// console.log(removeApple(['Banana','Apple','Orange','Apple']))

// function noApples(arr){
//     return arr.filter(Element => Element !== 'Apple')
// }
// console.log(noApples(['Banana','Apple','Orange','Apple']))

// function filterFalsy(arr){
//     return arr.filter(Elem => !!Elem === true);
// }
// console.log(filterFalsy(["",500,0,null,undefined,"0"]))

// function removeApple(arr){
//     let newArr=[]
//     for (let i =0 ; i < arr.length ; i++){

//         if (!!arr[i] === true){
//             newArr.push( arr[i]);
//         }

//     }
//     return newArr;
// }
// console.log(removeApple(["",500,0,null,undefined,"0"]))

// function convertToBoolean(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     !!arr[i] === true ? newArr.push(true) : newArr.push(false);
//   }

//   return newArr;
// }
// console.log(convertToBoolean([500, 0, "David", "", []]));

// function convertToBoolean(arr) {
//   return arr.map((Elem) => !!Elem);
// }
// console.log(convertToBoolean([500, 0, "David", "", []]));

// function showRating(n) {
//   let arr = "";
//   let s = Math.floor(n);
//   let dot = n % 1;
//   console.log(s);

//   for (i = 0; i < s; i++) {
//     if (i !==0 ){
//     arr += " *";
//     }
  
//         else {
//         arr += "*"
//             }
//     }
//   for (i = 0; i < dot; i++) {
//     if (dot !== 0) {
//       arr += " .";
//     }
//   }

//   return arr;
// }
// console.log(showRating(5.5));

// function sortLowToHigh(arr){

// return arr.sort((a,b)=> a-b)

// }    
// console.log(sortLowToHigh([-20,20,40,10,30,50,10]))


// function sortHighLow(arr){

// return arr.sort((a,b)=> a.price-b.price)

// }    
// console.log(sortHighLow([{id:1, price:50},{id:2, price:30},{id:3, price:60},{id:4, price:10}]))

// --------------------------------------------------------

// CALL API



// function postByUser(uId){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => console.log(res))
//     console.log(uId)
// }


// postByUser(4)


// FETCH 
// async function postByUser(userId){
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
// }


// postByUser(4);


async function first6IncompTodo(Id){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json();

    // const posts = result.filter(element => element.completed === false);

    // first6 = posts.filter(element => element.id <=Id+1)
    
    const first6 = result.filter(element => !element.completed).slice(0,6)

    console.log(first6)
}


first6IncompTodo(6);