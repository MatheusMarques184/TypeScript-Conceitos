export class Carro {
  private readonly motor = new Motor();

  ligar() {
    this.motor.ligar();
  }
  acelerar() {
    this.motor.acelerar();
  }
  parar() {
    this.motor.parar();
  }
  desligar() {
    this.motor.desligar();
  }
}

export class Motor {
  ligar() {
    console.log('ligar');
  }
  acelerar() {
    console.log('acelerar');
  }
  parar() {
    console.log('parar');
  }
  desligar() {
    console.log('desligar');
  }
}

const carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.parar();
carro1.desligar();
