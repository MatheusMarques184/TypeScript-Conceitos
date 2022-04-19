interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly endereco: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Marques',
  endereco: ['luiz botti'],
};

console.log(pessoa);

export default 0;
