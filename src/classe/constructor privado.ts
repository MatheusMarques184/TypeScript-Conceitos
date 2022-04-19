//Singleton - Gof | Factory Method - Gof
export class Database {
  private static database: Database;

  private constructor(
    // so permite uma instancia da classe
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('instancia nao foi criada pois ja existe');
      return Database.database;
    }
    console.log('criando instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`connected: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = Database.getDataBase('localhost', 'root', '123');
db1.connect();
console.log(db1);
console.log('--------------------------');

const db2 = Database.getDataBase('localhost', 'root', '123');
db2.connect();
console.log(db2);
