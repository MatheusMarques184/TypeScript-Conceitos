const array = [1, 2, 3, 4, 5, 6, 7]; // tipo concreto
const arrayFilterJs = array.filter((value) => value < 5);
console.log(arrayFilterJs);

//-------------------------------------- GENERIC TYPE --------------------------------------

type FilterCallBack<T> = (value: T, index?: number, array?: T) => boolean;

export function meuFilter<T>(array: T[], cbFn: FilterCallBack<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (cbFn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array2 = [1, 2, 3, 4, 5, 6, 7]; // tipo concreto
const arrayMeuFilter = meuFilter(array2, (value) => value < 5);
console.log(arrayMeuFilter);
