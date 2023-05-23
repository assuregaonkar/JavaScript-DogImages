// Flatten a 2D array of Integers and sort it in ascending order Example Given  
// [[3, 2, 1], [4, 6, 5],  [],  [9, 7, 8]] 
// your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. 
let newArr = [];
let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
newArr = newArr.concat(...arr).sort();
console.log(newArr);

// Given an array of objects - sort them in descending order based on the value of the specified property .  
// Example When sorted by "a", this:  
// [ {"a": 1, "b": 3}, {"a": 3, "b": 2}, {"a": 2, "b": 40}, {"a": 4, "b": 12} ]  
// should return:  
// [ {"a": 4, "b": 12}, {"a": 3, "b": 2}, {"a": 2, "b": 40}, {"a": 1, "b": 3} ] 
let newObj = [];
let obj = [ {"a": 1, "b": 3}, {"a": 3, "b": 2}, {"a": 2, "b": 40}, {"a": 4, "b": 12} ];
newObj = obj.sort((x,y) => y.a - x.a);
//newObj = newObj.sort((p,q) => q.b - p.b); 
console.log(newObj);