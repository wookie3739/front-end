// const foo3 = (name = "홍길동", age = 30)=>{
//
//     console.log(name, age);
// }
// foo3("홍길동", 18);

// const arr = [{
//     name:"홍길동",
//     age:24,
//     test: {
//         a: "안녕"
//     }
//
// },
//     {
//         name:"손흥민",
//         age:28,
//         test: {
//             a: "안녕"
//         }
// },
//     {
//         name:"황희찬",
//         age:27,
//         test: {
//             a: "안녕"
//         }
// }];

// arr[i].name;
// arr[i].test.a;

// console.log(divs);
//
// divs[0].style.background = "orange";
// divs[1].style.background = "red";






// let hasBox;
// const divs = document.querySelectorAll("div");
//
// for(let j = 0; j < divs.length; j++){
//     divs[j].style.background =`${divs[j].innerHTML}`;
//     divs[j].style.color =`${divs[j].innerHTML}`;
// }
// for(let i = 0; i < divs.length; i++){
//     divs[i].addEventListener("click", (event) => {
//         if (hasBox) {
//             hasBox.style.color = `${hasBox.innerHTML}`;
//         }
//         hasBox = event.target;
//         console.log(event);
//         hasBox.style.color = "black";
//     })
// }

let hasBox;
const boxes = document.querySelectorAll("div");
let a = ["red","orange","blue","yellow","green"];
let b =["레드","오렌지","블루","옐로우","그린"];
// for(let j = 0; j < boxes.length; j++){
//     boxes[j].style
// }


for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", (event) => {
        hasColors(event, i);
    });
}
function hasColors(event, index) {
    if(hasBox){
        hasBox.style.background = "";
        hasBox.innerHTML = "";
    }
    hasBox = event.target;
    console.log(event);
    hasBox.style.background = a[index];
    hasBox.innerHTML = b[index];

}

























