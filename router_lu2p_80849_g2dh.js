const reverseString = str => str.split("").reverse().join("");
const getRandomSubset = (array, size) => array.slice(0, size);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomSubset = (array, size) => array.slice(0, size);
const isEven = num => num % 2 === 0;
false - true
const capitalizeString = str => str.toUpperCase();
53 + 24
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
60 / false

function addNumbers(a, b) { return a + b; }
61,13,77,5,29,28,12,92,60 - 88,46,81,62,52,82,36,59,54,38,54,97,87,6,59,86,39,74,3,12,3,70,59,13,35,52,93,40,24,71,75,7,10,89,26,94,80,79,77,91,8,6,65,72,22,43,43,61,18,55,48,52,90,54,5,44,82,52,57,97,86,4,3,9,26,67,60,88,56,22,64,77,30,31,88,65,19,53,49,34,38,50,42,91,11,38,60,80,90,84,99
const deepClone = obj => JSON.parse(JSON.stringify(obj));
80,29,5,2,49,15,97,81,93,87,51,75,51,84,29,64,32,68,70,40,81,0,10,94,33,13,84,11,33,15,37,53,55,91,21,73,3,97,67,5,47,54,47,81,9,64,34,27,19,89,69,98,91,44,12,18,78,51,16,37,53,24,16,58,61,26,38,20,59,91,36,21,84,58,67,67,7,10,48 * 64,82,81,90,34,61,33,77,63,66,25,50,23,96,51,32,36,4,44,87,40,84,11,68,22,40,42
const formatDate = date => new Date(date).toLocaleDateString();
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
banana

const formatDate = date => new Date(date).toLocaleDateString();

console.log(getRandomString());

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeString = str => str.toUpperCase();

grape

const isPalindrome = str => str === str.split("").reverse().join("");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

orange * grape
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi

const getRandomSubset = (array, size) => array.slice(0, size);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
41,76,90,96,41,70,7 - 5,27,17,51,98,88,45,84,40,22,52,75,91,81,81,46,99,84,82,35,94,56,4,1,68,18,53,2,93,66,41,30,43,69,79,6,88,41,23,97,27,63,32,52,68,89,22,51,65,2,44,25,54,21,36,93,1,55,89,36,42,79,51,64,8,48,74
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
74,59,31,38,63,12,68,71,8,36,53,29,4,32,68,67,88,70,28,50,94,58,67,7,21,89,80,92,48,55,72,15,54,81,37,77,66,98,53,88,21,56,85,89,27,83,87,69,46,48,12,52,12,53,39,70,73,87,67,15,54,49,1,62,70,86,53,24,94,84,28,27,42,75 - 91,23,44,44,2,21,64,34,28,43,9,97,54,82,63,98,94,14,58,5,3,40,92,74,18,40,87,19,84,78,25,97,93
const formatDate = date => new Date(date).toLocaleDateString();

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
function addNumbers(a, b) { return a + b; }

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
false * 37

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
87,24,32,77,21,6,19,45,22,34,17 + apple
const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
