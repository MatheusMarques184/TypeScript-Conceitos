type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // & = and

export const pessoa: Pessoa = {
  nome: 'matheus',
  sobrenome: 'marques',
  idade: 19,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type DA = 'D' | 'A';
type intersecao = AB & AC & DA; // & = intersecao

//const res: intersecao = 0;
const res: intersecao = 'A';

console.log(res);
