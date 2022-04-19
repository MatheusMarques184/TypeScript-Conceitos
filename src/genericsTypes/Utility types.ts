export const objeto1: Record<string, string | number> = {
  //define o tipo da chave e o tipo do valor
  nome: 'nome',
  sobrenome: 'marques',
  idade: 20,
};

//----------------------------------------------------------------------------------

type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>; //transforma tudo em obrigatorio
type PessoaPartial = Partial<PessoaRequired>; //transforma tudo em opcional
type PessoaReadOnly = Readonly<PessoaRequired>; //transforma todos os atributos em readOnly
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>; // copia somente os atributos passados como parametro

export const objeto2: PessoaRequired = {
  nome: 'nome',
  sobrenome: 'marques',
  idade: 20,
};

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type typeExclude = Exclude<ABC, CDE>; // Exclui de ABC todos os elementos presentes de CDE
type typeExtract = Extract<ABC, CDE>; // Aceita somente os elementos de ABC que estao presente em CDE
