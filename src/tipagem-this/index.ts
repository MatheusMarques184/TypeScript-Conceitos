//tipagem do this

export function funcao(this: Date, argumento1: string): void {
  console.log(`${this.toLocaleString('en-GB')} || ${argumento1}`);
}

funcao.call(new Date(), 'matheus');
