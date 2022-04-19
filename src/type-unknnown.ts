let x: unknown;
let x2: any;

x2 = 100;
x2 = 'matheus';
x2 = 900;
x2 = '10';
const y2 = 800;

console.log(x2 + y2);

x = 100;
x = 'matheus';
x = 900;
x = 10;
const y = 800;

// console.log(x + y); Nao pode fazer sem uma validacao de tipo
if (typeof x === 'number') console.log(x + y);
