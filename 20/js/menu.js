const buttons = document.querySelectorAll('section div button');
const lists = document.querySelector('.contents');
const ul = document.createElement('ul');
// const lis = document.createElement('li');
// lists.append(ul);
// for(let j = 0)
const DUMMY_CONTENTS = [
    [
        "Lorem ipsum dolor sit amet",
        "consectetur adipisicing elit.",
        "recusandae velit veritatis voluptatem",
        "nisi perspiciatis qui",
    ],
    [
        "Aliquid asperiores in",
        "necessitatibus nesciunt",
        "nisi perspiciatis qui",
        "Lorem ipsum dolor sit amet",
        "necessitatibus nesciunt",
    ],
    [
        "Consectetur adipisicing elit",
        "Lorem ipsum dolor sit amet",
        "recusandae velit veritatis voluptatem",
        "Consectetur adipisicing elit",
        "Lorem ipsum dolor sit amet",
        "recusandae velit veritatis voluptatem",
    ]
];


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (event) => {
        // console.log(event.target);
        foo(event, i);
    });
}


let menuBox;  // 0
function foo(event, index){
let current;  // undefined
    if(event.target){
        current = event.target;
    } else{
        current = buttons[0];
    }

    if(menuBox === current){
        alert("동일한 버튼을 클릭하셨습니다.");
        return;
    }


    if(menuBox){ // 2
        menuBox.className = ""; // 2
    }

    // menuBox = event.target; // 0
    // current = menuBox;
    menuBox = current;
    menuBox.className = "active";
    // console.log(event.target.className);
    list(index);
}

foo(false, 0);

function list(idx) {
    let listContents = "";
    // lists.append(ul);
    for(let i = 0; i < DUMMY_CONTENTS[idx].length; i++){
        listContents = listContents + `<li>${DUMMY_CONTENTS[idx][i]}</li>`;
    }
    lists.innerHTML = `<ul>${listContents}</ul>`;
    // ul.innerHTML = listContents;
    // console.log();
}