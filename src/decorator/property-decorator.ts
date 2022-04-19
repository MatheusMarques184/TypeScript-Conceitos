export class Pessoa {
  @decorator
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
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

function decorator(classPrototype: any, propriedade: string): any {
  console.log(classPrototype);
  console.log(propriedade);
  let _valor: any;
  return {
    get: () => _valor,
    set: (valor: any) => {
      _valor = valor.split('').reverse().join('');
    },
  };
}

const pessoa1 = new Pessoa('matheus', 'marques', 19);
const falando = pessoa1.metodo('ola');
console.log(falando);
