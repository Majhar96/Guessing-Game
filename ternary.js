var number = Number(prompt('Please a number'));

// There is 3 part if 1st part is true then 2nd part will work. On the other hand 3rd part will work.

// var result = number > 0 ? 'positive' : 'negative';
var result = number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero';
document.write(result);