console.log('Ram Ram ji');

//object create 

// let rect={
//     length:2,
//     breadth:2,

//     draw: function(params) {
//         console.log('drawing rectangle');
//     }


// };


//factory function    -------------------------

// function createReactangle(len,bre){

//     return rectangle={
//         length:len,
//         breadth:bre,
    
//         draw(params) {
//             console.log(length*breadth);
//         }
    
    
//     };

//     // return createReactangle;
// }

// let rectangleobj=createReactangle(5,4);
// let rectangleobj2=createReactangle(3,8);
// let rectangleobj3=createReactangle(9,7);

//camelcase - numberOfStudent 
// pascal notaion - NumberOfStudent
// constructor function -> pascal Notation -> first letter of every word is capital -> NumberOfStudents

// function rectangle(len ,bre){

//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }


//object creation using constrtuctor


// let rectangleobject =new rectangle(4 ,6);
// let rectangleobject2 =new rectangle(4 ,6);
// let rectangleobject3 =new rectangle(4 ,6);


// rectangleobject.color='blue';

// add new properties using dynamic nature
// console.log(rectangleobject);

// delete item in obect using dynamic nature
// delete rectangleobject.color;
// console.log(rectangleobject);

// delete rectangleobject.length;
// console.log(rectangleobject);

// rectangleobject.length=this.length;
// console.log(rectangleobject);
// delete rectangleobject.draw;
// console.log(rectangleobject);
// rectangleobject.draw=function (params) {
//     console.log('drawing')
    
// }
// console.log(rectangleobject);


// object ke constructor ka constructor inbuild hota ha jo ki *Function* hota ha ,  java script me function bhi object hote ha 

// let rectangle1 = new Function(
//     'length', 'breadth',
//     `this.length=length;
//      this.breadth=breadth;
//      this.draw=function(){
//         console.log('drawing');
//     }`
// );
// let rect=new rectangle1(2,3);
// rect.length
// console.log(rect);


// let a=10;
// let b=a;

// a++;
// console.log(a,b);

// let a={value:10};
// let b=a;

// a.value++;
// console.log(a.value , b.value);


//  pass by value -primitive type

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a); // 10 print hota kyuki jab
//  function ke parameter me a dete ha to uski copy banti ha to oringnal value changenhi hoti ha


// pass by refrence - object/refrence/function

// let a={value:10};
// function inc(a){ // 11 print hoga kyuki function ke andar jo varible usedhua ha bah real value to address kar raha ha
//     a.value++;
// }
// inc(a);
// console.log(a);


// for in loop 


// let rectangle={
//     length:2,breadth:4
// }
// //for-in loop

// for(let key in rectangle){
//     // keys are reflected through key variable
//     //value are reflected through by  rectangle[key]
//     console.log(key ,rectangle[key]);
// }

// for-of loop - used in array and map

// for(let key of rectangle){

//     // obect iterable nhi hota ha isliye error ayegi
//     // object ko array bana kar hm isse use kar sakte ha 
//     console.log(key);
// }

// for(let key of Object.keys(rectangle)){ // object ki keys print kar sakte ha  

//         // obect iterable nhi hota ha isliye error ayegi
//         // object ko array bana kar hm isse use kar sakte ha 
//         console.log(key);
//     }

//     for(let key of Object.entries(rectangle)){ // object ki keys:value  print kar sakte ha  

//         // obect iterable nhi hota ha isliye error ayegi
//         // object ko array bana kar hm isse use kar sakte ha 
//         console.log(key);
// }

 
// in - agar koi value object me exist ha ya nhi karti pta karna hota ha to in ka usse karte ha


// if('length' && 'color' in rectangle){
//     console.log('present');
// }else{
//     console.log('Absent');

// }

 // object cloning - object copy nhi hota ha lekin hm cloning kimadadt object ki copy bna sakte ha
 // obect cloning can bhi done in three ways
//   #1 teration 

// let src={a:10,b:20,c:30};
// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);


// #2  Assign 

// let src={a:10,b:20,c:30};
// let dest=Object.assign({},src);
// src.a++;
// console.log(dest);
// console.log(dest);

// #3 spread

// let src={a:10,b:20,c:30};
// let dest={... src};

// console.log(dest);
// src.a++;
// console.log(dest);

console.log(' kal milte fir  , Ram Ram ji')

// **array - it is used to store data incontigeous loaction . it is a collection of many item , these items are [array,string , bool ]

// let numbers=[1,3,5,7];
// console.log(numbers);

// //end --> push
// //begining --> unshift
// //middle -->splice(index start , delete count , items);

// // ** seaching in array 
// console.log(numbers);
// console.log(numbers.indexOf(3));

// // we want to check if a number exist in an array 
// // type 1
// if(numbers.indexOf(5)!=-1)
//     console.log("present");

// // type 2
// console.log(numbers.includes(7));

// // type 3
// // numbers.indexOf(3,2);
// console.log(numbers.indexOf(3,2));

//** */  array of objects 

// let courses=[
//     {no:1,names:'abhi'},
//     {no:2,names:'vinni'}

// ];

// console.log(courses);

// **searching in array of objects  

//  indexof() - it can not define items because the objects lies on address and 
// the address of array items and inside searching items are in different address
// sidi baat objects address ke depned karat ha , indexof(), includes() dono un items ki index se seach karti esi liye nhi mile samgh gye bhaiya jii

// indexof()-not search
// courses.indexOf({no:1,names:'vinni'});
// console.log(courses.indexOf({no:1,names:'vinni'}));// -1

//  includes() method 
// console.log(courses.includes({no:1,names:'vinni'}));//false


//  we can search array of object with the help of call-back function()
//  call back function() --> esa function jo ki khud dusre function par depentt karte ha usse call back function kahte ha

//  let course = courses.find(function(course){
//     return course.names ==='abhi';
// });
// console.log(course);

// let course = courses.find(function(course){
//     return course.no ==1;
// });
// console.log(course);


// ** Arrow function

//  let course = courses.find(function(course){
//     return course.names =='abhi';
// });

// let course = courses.find(course=>course.names =='abhi');
// console.log(course);


// ** removing element in array 
// let numbers=[1,2,3,4,5,6,7,8];
// // type 1 --> end  - pop() function

// numbers.pop();
// console.log(numbers);

// // type 2 begining --> shift() function 

// numbers.shift();
// console.log(numbers);

// // type 3 --> middle -->splice(index , no of count which you want delete);
// numbers.splice(2,2);
// console.log(numbers);

// ** emptying the array 
// let numbers=[1,2,3,4,5]; 
// let num=numbers;

// numbers=[];
// console.log(numbers); // emtpty to ho gya lekin 
// console.log(num);  // lekin yha to bo number dikh gye 


// best way length ko 0 kar do 

// let numbers=[1,2,3,4,5]; 
// let num=numbers;

// // numbers.length=0;
// console.log(numbers); // emtpty to ho gya lekin 
// console.log(num); //empty ho gya 

// // 3 way splice()function ki madat se 
// numbers.splice(0,numbers.length);
// console.log(numbers); // emtpty to ho gya lekin 
// console.log(num); //empty ho gya 


// ** combining and slicing arrays

// let first=[1,2,3];
// let second=[4,5,6];

// combined --> concat() method
// let combined=first.concat(second);
// console.log(combined);

// // sliced - using slice( start index , end index+1),method ending me +1 index lekr likhna jota ha
// let sliced=combined.slice(2,5);// 2 se 4 ke bech ke number cahiye to 5 likhalast me
// console.log(sliced);
// let slice=combined.slice(2,);// 2 se end tak ke ayege 
// console.log(slice);

// spread operator -combine kar sakte isse bhi 
// let first=[1,2,3];
// let second=[4,5,6];

// let combine=[...first ,'a',...second , 'b']
// console.log(combine);


// iterating an array - using for of loop and for each loop

// let arr=[10,20,30,40,50,60];

// // for of loop
// // for(let value of arr){
// //     console.log(value);
// // };

// // for each loop //thoda diffrent ha 

// // arr.forEach(function(number){
// //     console.log(number);
// // })

// // using arrow function
// arr.forEach(num=>console.log(num));


// ** joining the array --> array ke sare element ek sath print kar dete h 

// let arr=[10,20,30,40,50,60];
// let joined=arr.join(',');
// console.log(joined);

// // spliting the string --> after split string it converts to array 

// let message='this is my first javascript program';
// let part=message.split(' ');

// console.log(part);

// // join
// let joine=part.join('_');
// console.log(joine);

// **sorting the array

// let arr=[10,20,2,40,8,60];
// let sorting=arr.sort();
// console.log(sorting);
// //  reverse the array
// let reversee=sorting.reverse();
// console.log(reversee);


// ** filtering the array --> we uesd filter('predicate function') method

// let arr=[2,4,6,-5,5,-3];
// // let filterd=arr.filter(function(value){
// //     return value>0;
// // });

// // using arrow function
// let filterd=arr.filter(value=>value>=0);
// console.log(filterd);


//  mapping array  - using map function --> map(using predicate function)

// let numbers=[10,20,2,40,8,60];
// console.log(numbers);
// // let items = numbers.map(function(value){
// //     return 'student_no' + ' ' +value;
// // });
// // console.log(items);

// // using arrow function
// let items=numbers.map(value=>'student_no'+' '+ value);
// console.log(items);


// ** mapping with objects

// let numbers=[1,2,3.-5,6,4];

// let filterd=numbers.filter(value=>value>=0);

// let items=filterd.map(function(num){
//     let obj ={value:num};
//     return obj;
// });
// console.log(items);

// easy kar dete h
// let items=filterd.map(function(num){
//     return {value:num};
// });
// console.log(items);

// arrow function se or easy kr de deko jii

// let items=numbers.filterd.map(num =>{value:num});
// console.log(items);

// let items=numbers
//           .filter(value=>value>=0)
//           .map(num =>{value:num});

// console.log(items);


//  reducing an array  --> reduce() method

let numbers=[1,2,6,4];
let total =0;
for(let value of numbers)
    total=total+value;

// console.log(total);

let totalsum=numbers.reduce((accumulator ,currentValue) => accumulator+currentValue,0);
console.log('printing total :');
console.log(totalsum);




// ***********4th class **************

//  hoisting kehte ha esse 
// run();// function ko function ki body ke upar bhi likhte ha to bo chalta ha js me
 


// function declaration 
// function run(){
//     console.log('running');

// }

// run();

// //  named  function assignment - isme hoisting apply nhi hoti ha 
// // stand(); // hoisting apply nhi hoto isme 
// let stand = function walk() {
//     console.log('walking');
// };

// // anonymous funcation assignment - isme hm function ke nam ko hata sakte ha 
// let stand2 = function()  {
//     console.log('walking');
// };


// stand();
// console.log(stand); // isme pura function call ho jayega 

// walk(); // direct call nhi kiye to run nhi hoga 

// let jump=stand;
// jump();

// // stand2(); // anonymous print kar diya ha

// let x=4;
// x='a'
// console.log(x);


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));
// console.log(sum(2,));// undefined hoga 2nd number --ek kam bhi de to kuch nhi ha 
// console.log(sum());//dono undefined honge 
// console.log(sum(2,3 , 5 ,4,6)); // extra se kuch nhi hoga 

//argument -special object ha jiske andar extra vairble aa jate ha 


// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// let ans=sum(1,2,3,4,5,6);


//  unused number lo argument ki help se use kar diya

//  ye object ha array nhi ha
// function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total=total + value;
//         return total;    
// }

// let ans=sum(1,2,3,4,);
// console.log(ans);


//rest operator - ... ye basiclly function ke parameter ko handle karta ha 
//rest ek array hota 

// function sum(... args) {
//     console.log(args);
// }

// sum(1,2,3,4,5);

// function sum(anum,val, ...args) { // rest operator ke baad koi or argumennt ya parameter pass nhi kar sakte ha 
//     console.log(args);
// }

// sum(1,2,3,4,5);

console.log("Ram Ram ji , maja ayega ")


// **** defalut parameter

// function interest(p,r=5,y){
//     return p*r*y/100;
// }
// // console.log(interest(1000 ,8));
// // console.log(interest(1000 ,undefined,8)); // ho jayega par accha use nhi ha iska


//  getter --> access properties
// setter  --> change on mutate properties

// let person={
//     fname:'love',
//     lname:'babbar'
// };
// console.log(person);
// function fullName(){
//     return `${person.fname} ${person.lname}`;
// }
// // issue -read only
// console.log(fullName());//here we can only read the name but do not update on name 

//  getter 

// let person={
//     fname:'love',
//     lname:'babbar',
//     get fullName(){
//         return `${person.fname} ${person.lname}`;
//     },
//    settter block
//     set fullName(value){
//         let parts =value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// };
// person.fullName='vineet Saini';
// console.log(person.fullName);


// ** error handling  ---> try and catch 

// let person={
//         fname:'love',
//         lname:'babbar',
//         get fullName(){
//             return `${person.fname} ${person.lname}`;
//         },
//         set fullName(value){
//             if(typeof value !==String){
//                 throw new Error('you have sent a number is fullname');
//             }
//             let parts =value.split(' ');
//             this.fname=parts[0];
//             this.lname=parts[1];
//         }
//     };
// try{
//     person.fullName=true;
// }
// catch(e){
//     alert(e);
// }
//  console.log(person.fullName);




























 































 













