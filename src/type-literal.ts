let x = 10; // eslint-disable-line
const y = 10; // o tipo de y sera 10, um subtipo de number

const pessoa = {
  nome: 'matheus' as const,
  sobrenome: 'marques',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Azul'));

export default 1;
