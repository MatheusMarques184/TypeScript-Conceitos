export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }

  getCpf(): string {
    console.log('usando super');
    return super.getCpf();
  }
}

const aluno1 = new Aluno('Matheus', 'Marques', 19, '111-111-111-67', '44A');
console.log(aluno1);
