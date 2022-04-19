// Array<tipo> - tipo[]

function multiplica(...args: number[]) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(multiplica(6, 9, 2, 5));
