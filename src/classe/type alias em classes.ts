type TipoPessoa = {
  nome: string;
  sobrenome: string;
  NomeCompleto(): string;
};

type Idade = {
  idade: number;
};

export class Pessoa implements TipoPessoa, Idade {
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
