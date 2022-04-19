// usado geralmente pra lancar erro
export function criaError(): never {
  throw new Error('Erro teste');
}

criaError();
