var myfunc = function(a, x) {
 return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;
// alert(x);
// alert(y(2,3));

setTimeout(booyah1, 2000);
setTimeout(booyah1(), 2000);


function booyah1() {
    alert("First box");
}

// function booyah2() {
//     alert("Second box");
// }