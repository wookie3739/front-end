const testimonial = [
    {
        body: `eunoia sunrise moonlight ice sunrise girlish adolescence destiny cherish way
         like baby sunrise apple hello illusion fascinating you iris lucid hello ice requiem
         cresent haze florence blush serendipity girlish charming you serendipity lucy banana
         carnival eunoia adorable purity vanilla sunrise girlish pure sunrise ideale blush
         lucid aurora bijou florence charming.`,
        writer: 'Sally',
        job: 'Web Designer',
        date: '2023.10.07',
    },
    {
        body: `adorable ideale florence hello like flora illusion florence ideale you blush heimish requiem
         serendipity baby charming haze heimish adolescence bijou world apple stella carnival
         lucy masquerade eunoia florence destiny illusion fascinating computer haze hello fabulous fascinating
         heimish adorable charming computer hello eunoia apple lovesick stella carnival milky seraphic flora bijou.`,
        writer: 'Amy',
        job: 'Graphic Designer',
        date: '2023.09.14',
    },
    {
        body: `hello marshmallow pure vanilla vanilla vanilla computer flutter way apple computer baby you ice
      seraphic seraphic fabulous blossom way you masquerade milky kitten grapes destiny computer
      twilight melody twilight flora bijou carnival kitten
      pure way requiem haze droplet bijou destiny twinkle lucy eunoia apple apple cresent carnival
      eunoia honey marshmallow.`,
        writer: 'Jung Ho',
        job: 'Developer',
        date: '2023.09.27',
    },
    {
        body: `charming requiem flutter stella serendipity girlish flutter marshmallow seraphic florence hello stella aurora
      twilight milky like serendipity flora sunrise adolescence aurora purity masquerade way masquerade milky
      girlish droplet computer shine adorable serendipity stella ice baby
      heimish world bijou you twilight baby shine laptop illusion cresent ice illusion twinkle lovesick adorable.`,
        writer: 'Chris',
        job: 'Printing Designer',
        date: '2023.10.23',
    },
];
const charButtons = document.querySelectorAll(".pickImages img");

const highlight = (before, current) => {
    if(before){
        before.className = "";
    }
    current.className = "active";
};

const renderTestimonial = (index) =>{
    const contents = document.querySelector('#contents');
    contents.innerHTML = `<div class="testimonial">
           <p>${testimonial[index].body}</p>
           <span>${testimonial[index].writer}, ${testimonial[index].job}</span>
           <div class ="date">${testimonial[index].date}</div>
</div>`
}
let hasTarget;
const clickButtonHandler = (event, index) => {

    console.log(event, index);
    let current;
    if(event.target){ // 함수 밖에서 호출했을 때 event의 값은 false
        current = event.target;
    } else {
        current = charButtons[0];
    }

    if(hasTarget === current){
        alert("동일한 버튼을 클릭하셨습니다.");
        return;
    }
    renderTestimonial(index);
    highlight(hasTarget, current);
    hasTarget = current;

}
// renderTestimonial(0);
// highlight(false, charButtons[0]);
clickButtonHandler(false, 0);


for(let  i = 0; i < charButtons.length; i++){
    charButtons[i].addEventListener('click', (event) => {
        clickButtonHandler(event, i);
    })
}