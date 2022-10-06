//Arithmetic

let a = 900;
let b = 300;
let c = a+b;
let c1 = a-b;
let c2 = a*b;
let c3 = a/b;
let c4 = a%b;
let e1 = a**3;

console.log(c, c1, c2, c3, c4, e1);

//Logical

let c5 = a||b;
let c6 = a&&b;
let c7 = !b;
console.log(c5, c6,c7);

//Bitwise

let c8 = a|b;
let c9 = a&b;
let c10 = a^b;
let c11 = a<<2;
let c12 = b>>2;
let c13 =  a ?? b; //It gives the right hand side operand value if the left hand side operand is NULL or Undefined(Nullish Coalescing Operator) 

console.log(c8, c9, c10, c11, c12, c13);

//Comparision 

let d1 = a>b;
let d2 = a<b;
let d3 = a==b;
let d4 = a!=b;
let d5 = a>=b;
let d6 = a<=b;

console.log(d1, d2, d3, d4, d5, d6);

//Terinary Operator

let t1 = a>b ? a:b;

console.log(t1)

//Increment Decrement

let x1 = a++;
let x2 = a--;
let x3 = b++;
let x4 = b--;

console.log(x1, x2, x3, x4);


