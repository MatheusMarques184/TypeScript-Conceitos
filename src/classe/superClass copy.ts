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

  static falaOi(nome: string, fala: string): void {
    console.log(`${nome} disse: ${fala} `);
  }
}

const pessoa1 = new Pessoa('Matheus', 'Marques', 19, '111-111-111-67');
Pessoa.falaOi('matheus', 'testando');
console.log(pessoa1);
