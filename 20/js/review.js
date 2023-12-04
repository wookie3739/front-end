//
// const stars = document.querySelectorAll('.stars .fa');
// const printData = [{
//     message: "아주 별로에요",
//     imgSrc: "images/star-lv1.png",
// },
//     {
//         message: "별로에요",
//         imgSrc: "images/star-lv2.png",
//     },
//     {
//         message: "보통이에요",
//         imgSrc: "images/star-lv3.png",
//     },
//     {
//         message: "좋아요",
//         imgSrc: "images/star-lv4.png",
//     },
//     {
//         message: "아주 별로에요",
//         imgSrc: "images/star-lv5.png",
//     },
// ];
// const printMessage = (message, imgSrc) => {
//     const print = document.querySelector(".print");
//     print.innerHTML = `${message} <img src = "${imgSrc}">`;
// };
// const checkStars = (index) => {
//     console.log(index);
//
//     for(let i = 0; i < stars.length; i++){
//         if(i <= index){
//             stars[i].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;";
//         }else{
//             stars[i].style.cssText = "";
//         }
//     }
// };
//
// for(let i = 0; i < stars.length; i++){
//     stars[i].addEventListener("click", () => {
//         checkStars(i);
//         printMessage(printData[i].message, printData[i].imgSrc);
//     });
// }

const stars = document.querySelectorAll('.stars .fa');

const printData = [{
    message: "아주 별로에요",
    imgSrc: "images/star-lv1.png",
},
    {
        message: "별로에요",
        imgSrc: "images/star-lv2.png",
    },
    {
        message: "보통이에요",
        imgSrc: "images/star-lv3.png",
    },
    {
        message: "좋아요",
        imgSrc: "images/star-lv4.png",
    },
    {
        message: "아주 별로에요",
        imgSrc: "images/star-lv5.png",
    },
];
//하나씩
// stars[0].addEventListener('click', 어떤 함수);
// stars[1].addEventListener('click', 어떤 함수);
// stars[2].addEventListener('click', 어떤 함수);
// stars[3].addEventListener('click', 어떤 함수);
// stars[4].addEventListener('click', 어떤 함수);

//합쳐서
for(let i = 0; i < stars.length; i++){
    stars[i].addEventListener('click', () => {
        checkStars(i);
        changePrint(printData[i].message, printData[i].imgSrc);
    });
}

//인자를 받아와야 인덱스로 값을 변경할 수 있게 된다
//그러므로 위에서 호출해와야한다.
const checkStars = (index) => {
    // 클릭시 색상 노란색, 그림자 노란색
    // stars[index].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;";
    // 인덱스 클릭시 그 전의 인덱스들은 노란색, 후의 인덱스들은 색상을 주지 않으려면
    for(let i = 0; i < stars.length; i++){
        if(i <= index){
            stars[i].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow";
        } else {
            stars[i].style.cssText = "";
        }
    }
};
// 하나의 함수에는 하나의 기능만 구현시키기 위해 print 배열 객체 데이터를 담아 올 함수를 하나 더 만든다.
// 그리고 배열을 보면 객체 안의 데이터가 두 가지의 종류가 있기 때문에 매개변수를 두 가지를 가져와야한다.
const changePrint = (text, src) => {
    // 하나씩
    const print = document.querySelector('.print');
    print.innerHTML = `${text} <img src = ${src} alt = "">`;
};







    // for(let i = 0; i < stars.length; i++){
    //     stars[i].style.cssText = "";
    // }
    // for(let i = 0; i <= index; i++){
    //     stars[i].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // }

    //0을 클릭했을 때:
    // stars[0].style.color = "yellow";
    // stars[0].style.textshadow = "0 0 5px yellow";
    //
    // stars[0].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    //
    // // 1을 클릭했을 때:
    // stars[0].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[1].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // // 2 클릭
    // stars[0].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[1].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[2].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"

    // // 3 클릭
    // stars[0].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[1].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[2].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"
    // stars[3].style.cssText = "color: yellow; text-shadow: 0 0 5px yellow;"



