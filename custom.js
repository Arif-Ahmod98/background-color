"use strict";

// let num = new Array();

// for( let i =0; i < 5; i++  ) {

//     num[i] = parseInt(prompt("Enter a number :"));

// }

// let sum =0;
// for ( let i =0; i < num.length; i++ ) {

//     sum = sum + num[i];

// }
// console.log("sum is " + sum);


// let num = new Array();

// for ( let i =0; i< 5; i++ ) {

//     num[i] = parseInt(prompt("Enter a number :"));

// }

// let sum = 0;

// for ( let i =0; i<5; i++ ) {
//     sum = sum + num[i];

// }

// console.log("sum is " + sum);


let body = document.querySelector("body");
let color = ["#1abc9c", "#8e44ad", "#34495e", "#2ecc71", "#7f8c8d", "#0097e6", "#192a56","#006266"];
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let colorCount = document.getElementById("colorCount");
let count =0;

    color.unshift("#d63031", "#ffeaa7", "#cd84f1");
let dCount =1;


//for right button
    rightBtn.addEventListener("click", function () {
    count++;
    colorCount.innerHTML = color[count];
    dCount++;

if ( count >= color.length) {
 
    count=0;
    body.style.background = color[count];
} else{
  
    this.style.background = color[dCount];
    body.style.background = color[count];

}


});


//for left button

    leftBtn.addEventListener("click", function () {
    count--;
    if ( count < 0) {
        count = color.length - 1;
    }else {
        body.style.background = color[count];
        dCount--;
        colorCount.innerHTML = color[dCount];
    }
 
   
})
