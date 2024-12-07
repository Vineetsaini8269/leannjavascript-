console.log('ram ram ji ');


//  **eventTarget -interface ha matlab blueprint - kisi event ko kese print karana ha uski kriya 

// type of eventTarget -

// 1. AddEventListener()- event ko add karta ha ki konsa event lagana ha ,kispe lagana ha , konsa function use karan ha 


// document.addEventListener('click',function(){
//     console.log('i have clicked on the document');
// });

// function eventFunction(){
//     console.log('i have clicked on the document');
// }
// document.addEventListener('click' , eventFunction);






// document.addEventListener('click',function(){
//         console.log('i have clicked on the document');
//     });
// document.removeEventListener('click',function(){
//         console.log('i have clicked on the document');
//     });




// function eventFunction(){
//     console.log('i have clicked on the document');
// }


// // // removeEventListener()- iski sahayayta se kisi event listner ko delete kar sakte ha
// // removeeventlistener me - hamesha function alag se bana kr lagate ha 
// // kyuki remove bale me same type , same function or same target hona cahine jabhi rin karega 
// document.addEventListener('click' , eventFunction);
// // document.removeEventListener('click' , eventFunction);

// const content=document.querySelector('#wrapper');

// content.addEventListener('click' , function(event){
//     console.log(event);
// });

// // preventDefault() -method se ap kisi tag to uska kam ha usse rok kar apna kam kran sakkte h

// let links=document.querySelector('a');
// console.log(document.links);

// // preventdefault()
// links.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("maja ayayga re");
// });


// avoid too many event in  code 

// let myDiv =document.createElement('div');

// function paraStatus(event){
//     console.log('i have clicked on para');
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=0;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent='this is para' +i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);




//  event.target property

// let myDiv =document.createElement('div');

// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=0;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent='this is para' +i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);




// let element=document.querySelector('#wrapper');
// console.log(element);

// element.addEventListener('click' ,function(event){
//     if(event.target.nodeName === 'SPAN'){
//     console.log('spana kiya kya'+ event.target.textContent);
// }
// });


// ***********3rd class****************

// adding 100para

// const t1=performance.now();
// for(let i=0;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent='this is para' + i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("this took " + (t2-t1) +"ms");


// //optimizing a bit

// const t3=performance.now();

// let myDiv=document.createElement('div');

// for(let i=0;i<=100;i++){
//     let element =document.createElement('p');
//     element.textContent='this is para' +i;

//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);

// const t4=performance.now();
// console.log("this took " + (t4-t3) +"ms");


// ***fragment 

// let fragment = document.createDocumentFragment();
// for(let i=0;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent='this is para' + i;

//     fragment.body.appendChild(newElement);
// }
// document.body.appendChild(fragment);//1reflow ,1repaint


// // **thread -one command in one time in js

// function addpara(){
//     let para=document.createElement('p');
//         para.textContent='js is single comment execute';
//         document.body.appendChild(para);
    
// }

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='kya hal chal jii';
//     document.body.appendChild(para);
// }

// addpara();
// appendNewMessage();


// ** settimeout - apn time set kr sakt kitte time me message btane h , 
// bki gunrentee nhi ha ka itto time le ha jayda bhi le sakt ha 
//karan event loop me queue me data ret jab tak call stack khali nhi hoye so esse time lg jat h


setTimeout(function name(params) {
    console.log('hello Everyone');
},3000);

setTimeout(function name(params) {
    console.log('hello Everyone');
},5000);





