const DUMMY_CONTENTS = [
    [{
        src: 'images/1.jpg',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스] HTML&CSS&JS 기초',
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
                    title: '풀스택을 위한 탄탄한 프런트엔드 부트캠프 (HTML, CSS, 바닐라 자바스크립트 + ES6) [풀스택 Part2]',
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
                    title: '중상급 퍼블리싱을 위한 CSS3의 모든 것',
                    category: '웹퍼블리셔, 중상급',
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
                    title: '비전공자를 위한 풀스택 맛집지도 만들기 프로젝트!: Front, Back-end 그리고 배포까지',
                    category: '웹개발, 고급',
                },
                rating: {
                    stars: 5,
                    reviewCnt: 12
                },
                price: '￦61,600',
                tags: ["베스트셀러", "할인"],
            }
        },],
    [{
        src: 'images/final/game1.jpg',
        contents: {
            header: {
                title: '[입문자를 위한 UE5] Part2. 언리얼 엔진 2D 게임 개발 입문',
                category: '게임개발, 초급',
            },
            rating: {
                stars: 2,
                reviewCnt: 8,
            },
            price: '￦55,000',
            tags: ["독점", "할인"],
        }
    },
        {
            src: 'images/final/game2.png',
            contents: {
                header: {
                    title: '[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part2: 자료구조와 알고리즘',
                    category: 'C#, 초급, MMORPG',
                },
                rating: {
                    stars: 3,
                    reviewCnt: 5,
                },
                price: '￦61,600',
                tags: ["신규", "할인"],
            }
        },
        {
            src: 'images/final/game3.png',
            contents: {
                header: {
                    title: '유니티 2D 타일맵 프로젝트',
                    category: '게임개발, 초급, 유니티, C#',
                },
                rating: {
                    stars: 4,
                    reviewCnt: 10,
                },
                price: '￦61,600',
                tags: ["베스트셀러", "독점", "할인"],
            }
        },],
    [{
        src: 'images/final/mobile1.png',
        contents: {
            header: {
                title: 'C# 입문부터 안드로이드, 윈도우 앱(UWP) 동시에 만들기 Xamarin Forms(자마린 폼즈) + Maui(마우이)',
                category: '모바일 앱 개발, 입문자, 안드로이드',
            },
            rating: {
                stars: 5,
                reviewCnt: 14,
            },
            price: '￦49,500',
            tags: ["독점"],
        }
    },
        {
            src: 'images/final/mobile2.png',
            contents: {
                header: {
                    title: 'UIKit - iOS14 실무 가이드 [iOS앱 진짜 개발자 되기]',
                    category: '모바일 앱 개발, 입문, IOS',
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
            src: 'images/final/mobile3.png',
            contents: {
                header: {
                    title: '[Lv.1] 누구나 할 수 있는 - SwiftUI Basic with iOS 17',
                    category: '모바일 앱 개발, 초급, IOS',
                },
                rating: {
                    stars: 5,
                    reviewCnt: 12,
                },
                price: '￦17,600',
                tags: ["베스트셀러"],
            }
        },]
];
const wrap = document.querySelector('#wrap');
const text = document.createElement('div');
const boxes = document.createElement('div');

console.log(DUMMY_CONTENTS[0]);
console.log(DUMMY_CONTENTS[1]);

console.log(DUMMY_CONTENTS[2]);
console.log(DUMMY_CONTENTS.length);



console.log(DUMMY_CONTENTS[0][1]);
console.log(DUMMY_CONTENTS[0][2]);
console.log(DUMMY_CONTENTS[0][3]);
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
const charButtons = document.querySelectorAll('.btn button');
for(let i = 0; i < charButtons.length; i++){
    charButtons[i].addEventListener('click', (event) => {
        foo(event, i);
    })
}
// function selectArray(idx) {
//     for(let i = 0; i < DUMMY_CONTENTS[idx].length; i++){
//
//     }
// }

let hasIndex;
function foo(event, idx) {
    let current;
    if(event.target){
        current = event.target;
    } else{
        current = charButtons[0];
    }
    if(hasIndex === current){
        alert("동일한 버튼을 클릭하셨습니다.");
        return;
        // hasIndex.className ="";
    }

    innerBox(idx);
    // selectArray(idx);
    if(hasIndex){
        hasIndex.className = "";
    }
    hasIndex = current;
    hasIndex.className = "active";

}
foo(false, 0);
















const DUMMY_CONTENTS = [
    [{
        src: 'images/1.jpg',
        contents: {
            header: {
                title: '[웹 개발 풀스택 코스] HTML&CSS&JS 기초',
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
                    title: '풀스택을 위한 탄탄한 프런트엔드 부트캠프 (HTML, CSS, 바닐라 자바스크립트 + ES6) [풀스택 Part2]',
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
                    title: '중상급 퍼블리싱을 위한 CSS3의 모든 것',
                    category: '웹퍼블리셔, 중상급',
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
                    title: '비전공자를 위한 풀스택 맛집지도 만들기 프로젝트!: Front, Back-end 그리고 배포까지',
                    category: '웹개발, 고급',
                },
                rating: {
                    stars: 5,
                    reviewCnt: 12
                },
                price: '￦61,600',
                tags: ["베스트셀러", "할인"],
            }
        },],
    [{
        src: 'images/final/game1.jpg',
        contents: {
            header: {
                title: '[입문자를 위한 UE5] Part2. 언리얼 엔진 2D 게임 개발 입문',
                category: '게임개발, 초급',
            },
            rating: {
                stars: 2,
                reviewCnt: 8,
            },
            price: '￦55,000',
            tags: ["독점", "할인"],
        }
    },
        {
            src: 'images/final/game2.png',
            contents: {
                header: {
                    title: '[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part2: 자료구조와 알고리즘',
                    category: 'C#, 초급, MMORPG',
                },
                rating: {
                    stars: 3,
                    reviewCnt: 5,
                },
                price: '￦61,600',
                tags: ["신규", "할인"],
            }
        },
        {
            src: 'images/final/game3.png',
            contents: {
                header: {
                    title: '유니티 2D 타일맵 프로젝트',
                    category: '게임개발, 초급, 유니티, C#',
                },
                rating: {
                    stars: 4,
                    reviewCnt: 10,
                },
                price: '￦61,600',
                tags: ["베스트셀러", "독점", "할인"],
            }
        },],
    [{
        src: 'images/final/mobile1.png',
        contents: {
            header: {
                title: 'C# 입문부터 안드로이드, 윈도우 앱(UWP) 동시에 만들기 Xamarin Forms(자마린 폼즈) + Maui(마우이)',
                category: '모바일 앱 개발, 입문자, 안드로이드',
            },
            rating: {
                stars: 5,
                reviewCnt: 14,
            },
            price: '￦49,500',
            tags: ["독점"],
        }
    },
        {
            src: 'images/final/mobile2.png',
            contents: {
                header: {
                    title: 'UIKit - iOS14 실무 가이드 [iOS앱 진짜 개발자 되기]',
                    category: '모바일 앱 개발, 입문, IOS',
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
            src: 'images/final/mobile3.png',
            contents: {
                header: {
                    title: '[Lv.1] 누구나 할 수 있는 - SwiftUI Basic with iOS 17',
                    category: '모바일 앱 개발, 초급, IOS',
                },
                rating: {
                    stars: 5,
                    reviewCnt: 12,
                },
                price: '￦17,600',
                tags: ["베스트셀러"],
            }
        },]
];
const wrap = document.querySelector('#wrap');
const text = document.createElement('div');
const boxes = document.createElement('div');

// console.log(DUMMY_CONTENTS[0]);
// console.log(DUMMY_CONTENTS[1]);
//
// console.log(DUMMY_CONTENTS[2]);
// console.log(DUMMY_CONTENTS.length);


// console.log(DUMMY_CONTENTS[0][0].contents.header.title);
// console.log(DUMMY_CONTENTS[0][1].contents.header.category);
// console.log(DUMMY_CONTENTS[0][2].contents.rating.stars);
// console.log(DUMMY_CONTENTS[0][3].contents.header.title);
console.log(DUMMY_CONTENTS[0].length);
console.log(DUMMY_CONTENTS[1].length);
console.log(DUMMY_CONTENTS[2].length);


console.log(DUMMY_CONTENTS[1][0].src);
// console.log(DUMMY_CONTENTS[0][2]);
// console.log(DUMMY_CONTENTS[0][3]);
boxes.className = "box1";
text.className = "text";

function innerBox(index) {
    for(let i = 0; i < DUMMY_CONTENTS[index].length; i++){
        createBoxes(index, DUMMY_CONTENTS[index][i].contents, i);
        innerStars(index, i);
    }
    // createBoxes(index, DUMMY_CONTENTS[index].contents);

}

console.log(DUMMY_CONTENTS[1][0].contents.rating.stars);
// console.log(DUMMY_CONTENTS[0].contents.tags[0]);
// console.log(DUMMY_CONTENTS[0].contents.tags[1]);
function innerStars(index) {
    const ulStars = document.querySelectorAll('.stars');
    const best = document.querySelectorAll('.best');
    let bests = "";
    let stars = "";
    for (let i = 0; i < DUMMY_CONTENTS[index][i].contents.rating.stars; i++) {
        stars = stars + `<i class = "fa fa-star"></i>`;

    }
    for(let j = 0; j < DUMMY_CONTENTS[index][j].contents.tags.length; j++){
        bests = bests + DUMMY_CONTENTS[index][j].contents.tags[j];
    }

    best[index].innerHTML = bests;
    ulStars[index].innerHTML = stars;
}

function createBoxes(index, dummy, i) {
    const text = document.createElement('div');
    text.innerHTML = `<div class="box1">
<div><img src = ${DUMMY_CONTENTS[index][i].src} alt =""></div>
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

// console.log(DUMMY_CONTENTS.length);
// for (let i = 0; i < DUMMY_CONTENTS.length; i++) {
//     innerBox(i);
// }
const charButtons = document.querySelectorAll('.btn button');
for(let i = 0; i < charButtons.length; i++){
    charButtons[i].addEventListener('click', (event) => {
        foo(event, i);
    })
}
// function selectArray(idx) {
//     for(let i = 0; i < DUMMY_CONTENTS[idx].length; i++){
//
//     }
// }

let hasIndex;
function foo(event, idx) {
    let current;
    if(event.target){
        current = event.target;
    } else{
        current = charButtons[0];
    }
    if(hasIndex === current){
        alert("동일한 버튼을 클릭하셨습니다.");
        return;
        // hasIndex.className ="";
    }

    innerBox(idx);
    // selectArray(idx);
    if(hasIndex){
        hasIndex.className = "";
    }
    hasIndex = current;
    hasIndex.className = "active";

}
foo(false, 0);
















