const dadosCliente: [number, string] = [1, 'Matheus'];
const dadosCliente2: [number, string, string?] = [1, 'Matheus', 'Opcional'];
const dadosCliente3: [number, ...string[]] = [
  1,
  'Matheus',
  'Joao',
  'Carlos',
  'Luiz',
  'Rafael',
  'Thiago',
];

dadosCliente[0] = 100;
console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
