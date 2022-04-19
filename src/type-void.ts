// funcao ou metodo sem retorno

function semRetorno(...args: string[]): void {
  console.log(args.join('-'));
}

const pessoa = {
  nome: 'matheus',
  sobrenome: 'marques',

  exibirNomeCompleto(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('matheus', 'luiz', 'gustavo');
pessoa.exibirNomeCompleto();

export { pessoa };
