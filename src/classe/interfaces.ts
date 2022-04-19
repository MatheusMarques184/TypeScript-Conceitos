interface TipoPessoa {
  nome: string;
  sobrenome: string;
  NomeCompleto(): string;
}

type Idade = {
  idade: number;
};

interface TipoPessoaComIdade extends TipoPessoa, Idade {}

export class Pessoa implements TipoPessoaComIdade {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  NomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('matheus', 'marques', 19);
console.log(pessoa);
