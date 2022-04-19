export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.gritoDeGuerra();
    console.log(`${this.nome} esta atacando ${personagem.nome}`);
    personagem.perderVida(this.ataque);
    console.log('-------------------------');
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract gritoDeGuerra(): void;
}

export class Guerreira extends Personagem {
  protected emoji = 'icone guerreira';
  gritoDeGuerra(): void {
    console.log('Guerreira ao ataque');
  }
}

export class Monstro extends Personagem {
  protected emoji = 'icone monstro';
  gritoDeGuerra(): void {
    console.log(`HUURRGGGGGGGGGGG`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 90, 1100);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
