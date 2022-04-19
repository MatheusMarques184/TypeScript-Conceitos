export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

//-------------------------------------------------------------------------

export class Pilha<T> {
  private index = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.index] = element;
    this.index++;
  }

  isEmpty(): boolean {
    return this.index === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.index--;
    const element = this.elements[this.index];
    delete this.elements[this.index];
    return element;
  }

  length(): number {
    return this.index - 1;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(43);
pilha.push(3);
pilha.push(123);
pilha.show();
console.log(`----------------------------------`);
pilha.pop();
pilha.show();
