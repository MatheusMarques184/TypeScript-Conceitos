/*eslint-disable*/
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'titulo',
  texto: 'texto',
};

console.log(documento.data);
// console.log(documento.data.toDateString); - quebra o programa, pois esta chamando um metodo em um valor undefined
console.log(documento.data?.toDateString); // Encadeamento opcional
console.log(documento.data?.toDateString ?? 'nao existe data'); // ?? - operador de coalescencia nula - checa nao valores (null e undefined)
                                                                //      e caso seja verdade executa o comando a direita do operador
