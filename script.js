// let scores = [3, 1, 2, 12, 10, 6];

// // let mapResult = scores.map(function (score, index) {
// //   // console.log("Item", score);
// //   console.log(index, score);
// //   return score * 2;
// // });

// let mapResult = scores.map((score, index) => {
//   // console.log("Item", score);
//   console.log(index, score);
//   return score * 2;
// });

// console.log(mapResult); // خروجی یک آرایه است  [6,2,4,24,20,12]

// function clickHandler(param) {
//   param.style.background = "red";
//   console.log("Click", param);
// }

// function showValue() {
//   console.log(this);
// }

// showValue();

let user = {
  id: 10,
  username: "Amir",
  age: 22,
  showAge: function () {
    console.log(this.age);//اگه از کلمه this داخل یه آبجکت استفاده کنیم همون آبجکت رو نشون میده
  },
};

user.showAge()