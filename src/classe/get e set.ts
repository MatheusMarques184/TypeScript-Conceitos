export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('set');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('get');
    return this._cpf;
  }
}
const pessoa1 = new Pessoa('Matheus', 'Marques', 19, '111-111-111-67');
pessoa1.cpf = '123-123-123-12'; // usando o set
console.log(pessoa1.cpf); // usando o get
