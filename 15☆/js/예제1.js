
//
// const hiClass = {
//   title: "풀스택수업",
//   category: "개발자, 프론트엔드, 백엔드" ,
//   course: "리액트, 스프링"
// };
// console.log(hiClass);
//
// const makeArea = (width, height) => ({width, height});
// const a = makeArea(40, 40);
// console.log(a);
const getMessage = (user) => {
    let message = '';
    if( "name" in user) {
        message = `${user.name}님 환영합니다.`;
    } else {
        message = "해당하는 유저가 존재하지 않습니다.";
    }
    return message;
}
const message = getMessage({name : "홍길동"});