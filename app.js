'use strict';
var a = 6;
var b = 9;


if (a > b) {
    console.log(a);
}
else {

    if (a < b) {
        console.log("no");
    }
    else {
        console.log("what");
    }


}

var x = 0;

while (x < 10) {
    console.log(x);
    x = x + 4;
}
console.log(x);

var u = 1.5;
var r = 0.27;
var p = 0;

var rbmin = 0;
var rbmax = 0.5;
var rb = rbmin;
var dr = (rbmax - rbmin) / 3;
let arr = [];
for (let i = 0; i < 4; i++) {
    p = u ** 2 * rb / ((r + rb) ** 2);
    console.log(rb, p);
    rb += dr;
    arr.push(p);
}
arr = arr.sort(function (a, b) { return a - b; });
console.log(arr[3]);