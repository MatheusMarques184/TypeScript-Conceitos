type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magente' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 19,
  nome: 'Matheus',
  salario: 10000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Ciano'));
console.log(pessoa);

export default 1;
