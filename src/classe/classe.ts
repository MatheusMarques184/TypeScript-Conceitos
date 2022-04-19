export class Empresa {
  protected readonly colaboradores: Colaborador[] = [];
  constructor(public readonly name: string, private readonly cnpj: string) {}

  public setColaborador(...colaboradores: Colaborador[]): void {
    colaboradores.map((colaborador) => this.colaboradores.push(colaborador));
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const empresa1 = new Empresa('teste', '111');
const Colaborador1 = new Colaborador('matheus', 'marques');
const Colaborador2 = new Colaborador('matheus2', 'marques2');
const Colaborador3 = new Colaborador('matheus3', 'marques3');
const Colaborador4 = new Colaborador('matheus4', 'marques4');
empresa1.setColaborador(Colaborador1, Colaborador2, Colaborador3);
empresa1.setColaborador(Colaborador4);
console.log(empresa1);
