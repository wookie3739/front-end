const DUMMY_CONTENTS = [
    [
        {
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
        },
    ],

    [
        {
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
        },
    ],

    [
        {
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
        },
    ]
];
const wrap = document.querySelector('#wrap');
const text = document.createElement('div');
const boxes = document.createElement('div');

boxes.className = "box1";
text.className = "text";

function innerBox(index, array) {
                        //DUMMY_CONTENTS[0]
    for (let i = 0; i < array.length; i++) {
        createBoxes(array[i]); //DUMMY_CONTENTS[0][i]
    }
}

function innerStars(array) {
    let stars = "";
    for (let i = 0; i < array; i++) {
        stars = stars + `<i class = "fa fa-star"></i>`;
    }
    return stars;
}

function innerTags(array) {
    let bests = "";
    for (let j = 0; j < array.length; j++) {
        bests = bests + `<span>${array[j]}</span>`;
    }
    return bests;
}

function createBoxes(dummy) {
    const item = `<div class="box1">
        <div><img src = ${dummy.src} alt =""></div>
        <p>${dummy.contents.header.title}</p>
        <p>${dummy.contents.header.category}</p>
        <div class="stars">${innerStars(dummy.contents.rating.stars)}</div>
        <span>(${dummy.contents.rating.reviewCnt})</span>
        <p>${dummy.contents.price}</p>
        <div class="bod">${innerTags(dummy.contents.tags)}</div>
    </div>`;
    wrap.innerHTML += item;
}

const charButtons = document.querySelectorAll('.btn button');
for (let i = 0; i < charButtons.length; i++) {
    charButtons[i].addEventListener('click', (event) => {
        foo(event, i);
    })
}

let hasIndex;
function foo(event, idx) {
    let current;
    if (event.target) {
        current = event.target;
    } else {
        current = charButtons[0];
    }
    if (hasIndex === current) {
        alert("동일한 버튼을 클릭하셨습니다.");
        return;
        // hasIndex.className ="";
    }
    wrap.innerHTML = "";
    if (idx === 0) {
        for(let i = 0; i < DUMMY_CONTENTS.length; i++){
            innerBox(idx, DUMMY_CONTENTS[i]);
        }
    } else if (idx === 1) {
        // web 버튼 실행 로직
        innerBox(idx, DUMMY_CONTENTS[0]);

    } else if (idx === 2) {
        // game 버튼 실행 로직
        innerBox(idx, DUMMY_CONTENTS[1]);
    } else {
        // mobile 버튼 실행 로직
        innerBox(idx, DUMMY_CONTENTS[2]);
    }
    if (hasIndex) {
        hasIndex.className = "";
    }
    hasIndex = current;
    hasIndex.className = "active";
}
foo(false, 0);



const array = ["손흥민","황희찬","짜장면","짬뽕","돈까스"];
// const a = webContents.map(()=>{});
array.forEach((item, index, aaa)=>{
    console.log(item, index, aaa);
})

// 구조분해할당

// const [a, b, c] = ["가을","겨울","봄"];

// 삼항연산자, &&연산자, || 연산자


//1. map
//2. filter
//3. concat