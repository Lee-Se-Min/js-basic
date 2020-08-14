// 모든 변수는 const로 정의 한다
// 변화가 필요한 변수에 대해서는 const를 변환한다.

// let a = 221;
// let b = a - 5;
// a = 4;
// console.log(`${b} , ${a}`);

// const a = 221;
// let b = a - 5;
// // a = 4;  -> Assignment to constant variable 에러
// console.log(a, b);

/* String
const what = "Nico";
// const what = Nico; -> Nico를 변수로 생각, 정의되지 않았다고 오류
*/

/* Boolean
const what = true;
*/

/* Float
const what = 4.4;
*/
// ========================================

// ========================================
// 데이터의 정렬
// array, object

/* Array
const monday = "Mon";
const tuesday = "Tue";
const wednesdsday = "Wed";
const thursday = "Thu";
const fri = "Fri";

const daysOfWeek = [monday, tuesday, wednesdsday, thursday, fri];
console.log(daysOfWeek);
*/

// const objA = {
//   name: "lee",
//   age: 35,
//   gender: "male",
//   weight: 80,
//   isKorean: true,
// };

// objA.name = "semin";
// // objA는 const이지만 하위 항목들은 변경이 가능하다.
// // 이는 문제가 될려면 objA를 변경할경우 문제가 된다.
// // 예로 objA = true;   또는 objA = objB;

// const arrayObj = [objA, objA];
// console.log(arrayObj);
// ========================================
// ========================================
// 함수
// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   multi: function (a, b) {
//     return a * b;
//   },
//   divid: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// calculator.plus(3, 3);
// console.log(calculator.plus(1, 2));
// console.log(calculator.minus(2, 1));
// console.log(calculator.multi(1, 2));
// console.log(calculator.divid(2, 1));
// console.log(calculator.power(2, 10));
// ========================================

// ========================================
// // JS DOM Function
// // DOM(Document Object Module)
// const title = document.getElementById("title");
// console.log(title);
// title.innerText = `Testing DOM`;
// console.dir(title);
// ========================================

// ========================================
// //Modifying the DOM widht JS
// const title = document.getElementById(`title`);
// console.dir(title);
// title.style.color = "white";
// document.title = "I own your now";

// //Events and evnet handlers
// function handleResize(event) {
//   console.log(event);
// }

// window.addEventListener("resize", handleResize);
// //window.addEventListener("resize", handleResize());
// // 위와 같이 적을경우 이벤트가 발생하지도 않았는데
// // 함수 명령어를 실행함 ...기억!!!!!
// const title = document.getElementById(`title`);

// function handleClick(evnet) {
//   title.style.color = "red";
// }

// title.addEventListener("click", handleClick);
// ========================================

// ========================================
// //If, else, and, or
// // if (10 !== 5) {
// //   console.log(`yes`);
// // } else {
// //   console.log(`no`);
// // }
// if (20 > 5 && "a" > "b") {
//   console.log("all true");
// } else {
//   console.log("at least one false");
// }

// // &&(and) , ||(or)
// const age = prompt("How old are you??");

// if (age > 18) {
//   console.log(`you can drink`);
// } else {
//   console.log(`go home`);
// }
// ========================================

// // ========================================
// // DOM - If else - function practice
// const title = document.querySelector(`#title`);
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OHTER_COLOR = "#7f8c8d";

// function handlerClick(evnet) {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OHTER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handlerClick);
// }

// init();
// ========================================

// ========================================
//DOM - If else- function - two
// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";

// function handleClick(event) {
//   //   const hasClass = title.classList.contains(CLICKED_CLASS);
//   //   console.log(hasClass);
//   //   if (!hasClass) {
//   //     title.classList.add(CLICKED_CLASS);
//   //   } else {
//   //     title.classList.remove(CLICKED_CLASS);
//   //   } ----->>>>>
//   title.classList.toggle(CLICKED_CLASS);
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }

// init();

// ========================================
