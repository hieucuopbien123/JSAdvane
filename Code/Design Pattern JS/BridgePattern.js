// Abstraction - Database
class Database {
  constructor(databaseType) {
    this.databaseType = databaseType;
  }

  connect() {
    console.log(`Connecting to ${this.databaseType} database...`);
  }

  executeQuery(query) {
    console.log(`Executing query in ${this.databaseType}: ${query}`);
  }
}

// Implementations - MySQL, PostgreSQL
class MySQLDatabase extends Database {
  constructor() {
    super("MySQL");
  }
}

class PostgreSQLDatabase extends Database {
  constructor() {
    super("PostgreSQL");
  }
}

// Concrete Bridge - DataAccessObject
class CustomerDataAccess {
  constructor(database) {
    this.database = database;
  }

  create() {
    this.database.connect();
    this.database.executeQuery("INSERT INTO customers (name, email) VALUES ('John Doe', 'john@example.com')");
  }

  read() {
    this.database.connect();
    this.database.executeQuery("SELECT * FROM customers");
  }

  update() {
    this.database.connect();
    this.database.executeQuery("UPDATE customers SET name = 'Jane Smith' WHERE id = 1");
  }

  delete() {
    this.database.connect();
    this.database.executeQuery("DELETE FROM customers WHERE id = 1");
  }
}

class OrderDataAccess {
  constructor(database) {
    this.database = database;
  }

  create() {
    this.database.connect();
    this.database.executeQuery("INSERT INTO orders (name, price) VALUES ('Laptop', '10')");
  }

  read() {
    this.database.connect();
    this.database.executeQuery("SELECT * FROM orders");
  }

  update() {
    this.database.connect();
    this.database.executeQuery("UPDATE orders SET name = 'Laptop' WHERE id = 1");
  }

  delete() {
    this.database.connect();
    this.database.executeQuery("DELETE FROM orders WHERE id = 1");
  }
}

// Example usage
const mySQLDatabase = new MySQLDatabase();
const postgreSQLDatabase = new PostgreSQLDatabase();

// Ở trong ngôn ngữ hướng đối tượng, 2 class này sẽ cùng implement 1 abstract class cơ
const customerDataObject = new CustomerDataAccess(mySQLDatabase);
customerDataObject.create();
customerDataObject.read();
customerDataObject.update();
customerDataObject.delete();

const orderDataObject = new OrderDataAccess(postgreSQLDatabase);
orderDataObject.create();
orderDataObject.read();
orderDataObject.update();
orderDataObject.delete();
