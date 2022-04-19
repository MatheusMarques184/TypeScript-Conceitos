export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pot(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calc = new SubCalculadora(10);
calc.add(5).mul(2).div(2).sub(5).pot(2);
console.log(calc.numero);

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    if (this.url && this.method) {
      console.log(
        `fazendo uma requisicao ${this.method} para o servidor ${this.url}`,
      );
    } else {
      console.log(`ERROR, FALTA DE INFORMACOES`);
    }
  }
}

const request = new RequestBuilder();
request.setUrl('teste').setMethod('post').send();
