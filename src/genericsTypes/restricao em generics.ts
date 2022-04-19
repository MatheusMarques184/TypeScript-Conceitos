type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]; //extends = restricao = constraints

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'amarelo',
  vacinas: ['vacina1', 'VACINA2'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor);
