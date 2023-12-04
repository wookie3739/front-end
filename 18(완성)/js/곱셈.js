// let a = 2;
//
// for(i = 1; i<=9; i++){
//     console.log(a*i);
// }
//
// for(let i = 2; i<=9; i++){
//         console.log(i + "단");
//     for(let j = 1; j<=9; j++){
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }


// const a = [];
// a.push(1);
// a.push("123213");
// a.push("안녕");
// a.push(4);

// console.log(a);
// const numbers = [1,2,3,4,5,6,7,8,9];
// function _filter() {
//     let a = [];
//     for (let i = 0; i <= numbers.length; i++) {
//         if(numbers[i]>=3){
//             a.push(numbers[i]);
//         }
//
//     }

    // for(let i = 0; i < a.length; i++){
    //     if(i >= 2){
    //         // console.log( a[i] );
    //     }
    // }
    //  return;

// }
// _filter();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function _filter(numArray) {
//     let a = [];
//     for (let i = 0; i < numArray.length; i++) {
//         if (numArray[i] >= 3) {
//             a.push(numArray[i]);
//         }
//     }
//     console.log(a);
// }
//
// _filter(numbers);

// console.log(numbers);






// let b;
// function transparentArea() {
//
// }


// const rowArea =() =>{
//     const b = document.createElement("div");
//     b.style.background = "blue";
//     b.style.width = "570px";
//     b.style.height = "50px";
//     diamond.appendChild(b);
//     // console.log(b);
// }
//
const diamond = document.querySelector(".diamond");
const createArea = () => {
    const a = document.createElement("div");
    a.style.background = "red";
    a.style.width = "50px";
    a.style.height =  "50px";
    diamond.appendChild(a);

}
// diamond.addEventListener("click", createArea);
for(let i = 0; i<=80; i++){
    createArea();
}
//
// let row = 1;
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < row; j++) {
//         createArea();
//     }
//     row += (i < 4) ? 2 : -2;
// }


//















