// var number = [3, 4, 5, 24, 52, 2];


// console.log(sum);

var array = new Array();
for (var i = 0; i <= 5; i++) {
    array[i] = parseInt(prompt('here put the value'))
}

var sum = 0;
for (var i = 0; i <= 5; i++) {
    console.log(array[i]);
    sum = sum + array[i];
}
console.log(sum);