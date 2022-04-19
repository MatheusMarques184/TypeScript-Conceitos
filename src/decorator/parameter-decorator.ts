export class Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(
    @decorator nome: string,
    @decorator sobrenome: string,
    idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  metodo(@decorator msg: string): string {
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

function decorator(classPrototype: any, metodo: string, index: number): any {
  console.log(classPrototype);
  console.log(metodo);
  console.log(index);
}

const pessoa1 = new Pessoa('matheus', 'marques', 19);
