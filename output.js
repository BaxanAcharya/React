"use strict";

//npm install --save-dev @babel/core @babel/cli
//npx babel index.js --out-file output.js
//global scope
//variable create destroy...........js closure
// var obj={
// 	value:11,
// 	testF:function () {
// 		// body...
// 		var value=22;
// 		console.log(this.value)
// 	},
// 	testArr:()=>{
// 		let value=3
// 		console.log(this.value)
// 	}
// }
// obj.testF();
// obj.testArr();
var test = function test() {
  console.log("this is es6 syntax");
};

var Arr2 = myArray.map(function (item) {
  return item;
});
console.log(Arr2); //{
//	plugins: ['@babel/plugin-transform-arrow-functions']
//}
