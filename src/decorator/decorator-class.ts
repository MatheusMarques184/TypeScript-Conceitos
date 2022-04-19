type Constructor = new (...args: any[]) => any;

function InverteNomeECor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = `${args[0]
          .split('')
          .reverse()
          .join('')} ${param1} ${param2}`;
        this.cor = `${args[1]
          .split('')
          .reverse()
          .join('')} ${param1} ${param2}`;
      }
    };
  };
}

function outroDecorador(target: Constructor) {
  console.log('teste');
}

@outroDecorador
@InverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal1 = new Animal('matheus', 'azul');
console.log(animal1);
