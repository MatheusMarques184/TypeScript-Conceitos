let pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean; // ? faz o valor ficar como opcional
};

const pessoa2: {
  readonly nome: string; // nao pode ser alterada
  sobrenome: string;
  [key: string]: unknown; // permite criar mais chave que nao foram definidas
} = {
  nome: 'matheus',
  sobrenome: 'marques',
};

pessoa2.teste = 'testando';

console.log(pessoa2);

export { pessoa };
