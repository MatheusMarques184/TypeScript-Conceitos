export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s/g);
    const nome = palavras.shift();
    if (!nome) return;
    this.nome = nome;
    this.sobrenome = palavras.join(' ');
  }
}

function decorator(
  classPrototype: any,
  metodo: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototype);
  console.log(metodo);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

const pessoa1 = new Pessoa('matheus', 'marques', 19);
const gritando = pessoa1.metodo('grito');
console.log(gritando);
