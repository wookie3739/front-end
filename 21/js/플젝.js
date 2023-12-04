const DUMMY_CONTENTS = [
    {
        src: 'images/1.jpg',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스]',
                category: '웹개발, 초급',
            },
            rating: {
                stars: 2,
                reviewCnt: 8,
            },
            price: '￦61,600',
            tags: ["베스트셀러", "할인"],
        }
    },
    {
        src: 'images/2.png',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스]',
                category: '웹개발, 초급',
            },
            rating: {
                stars: 3,
                reviewCnt: 5,
            },
            price: '￦61,600',
            tags: ["베스트셀러", "독점", "할인"],
        }
    },
    {
        src: 'images/3.png',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스]',
                category: '웹개발, 초급',
            },
            rating: {
                stars: 4,
                reviewCnt: 10,
            },
            price: '￦61,600',
            tags: ["베스트셀러", "독점", "할인"],
        }
    },
    {
        src: 'images/4.png',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스]',
                category: '웹개발, 초급',
            },
            rating: {
                stars: 5,
                reviewCnt: 12
            },
            price: '￦61,600',
            tags: ["베스트셀러", "할인"],
        }
    },
];
const wrap = document.querySelector('#wrap');
const text = document.createElement('div');
const boxes = document.createElement('div');
// wrap.append(text);
// text.append(boxes);

boxes.className = "box1";
text.className = "text";

function innerBox(index) {
    createBoxes(index, DUMMY_CONTENTS[index].contents);
    innerStars(index);
}

// console.log(DUMMY_CONTENTS[0].contents.tags[0]);
// console.log(DUMMY_CONTENTS[0].contents.tags[1]);
function innerStars(index) {
    const ulStars = document.querySelectorAll('.stars');
    const best = document.querySelectorAll('.best');
    let bests = "";
    let stars = "";
    for (let i = 0; i < DUMMY_CONTENTS[index].contents.rating.stars; i++) {
        stars = stars + `<i class = "fa fa-star"></i>`;

    }
    for(let j = 0; j < DUMMY_CONTENTS[index].contents.tags.length; j++){
        bests = bests + DUMMY_CONTENTS[index].contents.tags[j];
    }

    best[index].innerHTML = bests;
    ulStars[index].innerHTML = stars;
}

function createBoxes(index, dummy) {
    const text = document.createElement('div');
    text.innerHTML = `<div class="box1">
<div><img src = ${DUMMY_CONTENTS[index].src} alt =""></div>
<p>${dummy.header.title}</p>
<p>${dummy.header.category}</p>
<ul class="stars"></ul>
<span>(${dummy.rating.reviewCnt})</span>
<p>${dummy.price}</p>
<div class="bod">
<span class ="best"></span>
</div>
</div>
`;
    wrap.append(text);
}
for (let i = 0; i < DUMMY_CONTENTS.length; i++) {
    innerBox(i);
}