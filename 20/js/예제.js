
const images = document.querySelectorAll('.images img');
// console.log(images[0]);
const contents = document.querySelector('.contents');
const texts = [{
    writer: "Sally, Web Designer",
    date: "2023.10.07",
    main: "eunoia sunrise moonlight ice sunrise girlish adolescence destiny cherish way\n" +
        "like baby sunrise apple hello illusion fascinating you iris lucid hello ice requiem\n" +
        "cresent haze florence blush serendipity girlish charming you serendipity lucy banana\n" +
        "carnival eunoia adorable purity vanilla sunrise girlish pure sunrise ideale blush\n" +
        "lucid aurora bijou florence charming.",
},{
    writer:"Amy, Graphic Designer",
    date:"2023.09.14",
    main:"adorable ideale florence hello like flora illusion florence ideale you blush heimish requiem\n" +
        "serendipity baby charming haze heimish adolescence bijou world apple stella carnival\n" +
        "lucy masquerade eunoia florence destiny illusion fascinating computer haze hello fabulous fascinating\n" +
        "heimish adorable charming computer hello eunoia apple lovesick stella carnival milky seraphic flora bijou.",
},{
    writer:"Jung Ho, Developer",
    date:"2023.09.27",
    main:"hello marshmallow pure vanilla vanilla vanilla computer flutter way apple computer baby you ice\n" +
        "seraphic seraphic fabulous blossom way you masquerade milky kitten grapes destiny computer\n" +
        "twilight melody twilight flora bijou carnival kitten\n" +
        "pure way requiem haze droplet bijou destiny twinkle lucy eunoia apple apple cresent carnival\n" +
        "eunoia honey marshmallow.",
},{
    writer:"Chris, Printing Designer",
    date:"2023.10.23",
    main:"charming requiem flutter stella serendipity girlish flutter marshmallow seraphic florence hello stella aurora\n" +
        "twilight milky like serendipity flora sunrise adolescence aurora purity masquerade way masquerade milky\n" +
        "girlish droplet computer shine adorable serendipity stella ice baby\n" +
        "heimish world bijou you twilight baby shine laptop illusion cresent ice illusion twinkle lovesick adorable.",
}];





let hasCircle;
let dblclick = -1;
//클릭
//
// for(let i = 0; i <= images.length; i++){
//     images[i].addEventListener('dblclick', (event) =>{
//         alert("두번 클릭");
//         return;
//     })
// }
//



for(let i = 0; i < images.length; i++){

    images[i].addEventListener('click', (event) => {

        // if(dblclick === i){
        //     alert("두 번 클릭하셨습니다.");
        //     return;
        // }
        // dblclick += 1;
        // // // console.log(dblclick);

        foo(event);
        // console.log(event);
        changeTexts(i);
    });
}

function foo(event) {

    if (hasCircle === event.target) {
        alert("두 번 클릭하셨습니다.");
        return;
    }

    if(hasCircle){
        hasCircle.style.cssText = "";
    }
    hasCircle = event.target;
    hasCircle.style.cssText = "border-radius:50%; filter:grayscale(0);";
}

function changeTexts(index) {
    contents.innerHTML = `<p>${texts[index].main}</p> <p>${texts[index].writer}</p> ${texts[index].date} `;

}








