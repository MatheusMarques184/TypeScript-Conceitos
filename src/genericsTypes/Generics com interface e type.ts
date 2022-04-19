interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

export const aluno1: PessoaProtocolo = {
  nome: 'matheus',
  sobrenome: 'marques',
  idade: 19,
};
console.log(aluno1);

export const aluno2: PessoaProtocolo<number, string> = {
  nome: 12,
  sobrenome: 19,
  idade: 'teste',
};
console.log(aluno2);
