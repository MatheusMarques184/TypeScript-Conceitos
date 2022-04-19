/*eslint-disable*/
const nome: string = 'luiz';
const idade: number = 30; // aceita hexadecimal
const adulto: boolean = false;
const simbolo: symbol = Symbol('qualquer');
//const big: bigint = 10n;

//ARRAYS

let arrayNumeros: Array<number> = [1, 2, 3, 4]
let arrayNumeros2: number[] = [1, 2, 3, 4]

let arrayString: Array<string> = ['a', 'b', 'c']
let arrayString2: string[] = ['a', 'b', 'c']

//OBJETO

let pessoa: {
  nome: string,
  idade:number,
  adulto?: boolean  // ? faz o valor ficar como opcional
}

//FUNCAO

function soma(x:number, y:number) {  // ele assosia o tipo number a funcao automaticamente
  return x+y
}

function soma2(x:number, y:number): number {  // define manulamente o retorno
  return x+y
}

const soma3: (x:number, y:number) => number = (x, y) => x+y
