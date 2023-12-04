
const fas = document.querySelectorAll('div .fa');
const span = document.querySelector('section div:last-child span');
const img = document.querySelector('section div:last-child div');

const a = ["아주 별로에요","별로에요","보통이에요","좋아요","아주 좋아요"];
const b = [`<img src = "imageSee/star-lv1.png">`,
    `<img src = "imageSee/star-lv2.png">`,
    `<img src = "imageSee/star-lv3.png">`,
    `<img src = "imageSee/star-lv4.png">`,
    `<img src = "imageSee/star-lv5.png">`];

let hasStar;

for(let i = 0; i < fas.length; i++){
    fas[i].addEventListener('click', (event) => {
        foo(event, i);
    });
}

function foo(event, index) {

    blankStars(index);
    filledWithStars(index);
    innerStars(event, index);

}

function blankStars(index) {
    for(let j = index; j < fas.length; j++){
        fas[j].style.color = "";
    }
}

function filledWithStars(index){
    for (let k = 0; k <= index; k++){
        fas[k].style.color = "yellow";
    }
}

function innerStars(event, index){
    hasStar = event.target;
    span.innerHTML = a[index];
    img.innerHTML = b[index];
}

