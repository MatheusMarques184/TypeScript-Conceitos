export function isNumber(value: unknown): value is number {
  // sempre que o retorno for true o valor e um number
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((soma, value) => {
    if (isNumber(soma) && isNumber(value)) {
      return soma + value;
    }
    return soma;
  }, 0);

  return retorno;
}

console.log(isNumber(12));

console.log(soma(1, 2, 3, 4, 5));

console.log(soma('a', 'b'));

console.log(soma(...[1, 2, 3, 4, 5, 'a', 'b', 'c']));
