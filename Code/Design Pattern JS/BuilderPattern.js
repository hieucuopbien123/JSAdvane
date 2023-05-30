class Car {
  constructor(engine, chassis, body) {
    this.engine = engine;
    this.chassis = chassis;
    this.body = body;
  }
  toString(){
    return JSON.stringify(this);
  }
}

class CarBuilder {
  constructor(){
    this.chassis = "default chasis";
    this.engine = "";
    this.body = "";
  }
  addChassis(chassis) {
    this.chassis = chassis;
    return this;
  }
  addEngine(engine) {
    this.engine = engine;
    return this;
  }
  // Cùng nhiệm vụ nhưng thực hiện khác nhau
  addSpecialEngine(engine){
    this.engine = "Special " + engine;
    return this;
  }
  addBody(body) {
    this.body = body;
    return this;
  }
  build() {
    return new Car(this.engine, this.chassis, this.body);
  }
}

const carBuilder = new CarBuilder();
const v12Car = carBuilder
  .addEngine('v12')
  .addBody('KIA SOLUTO')
  .addChassis('LUXURY')
  .build();
const v13Car = carBuilder
  .addEngine('v13')
  .addBody('KIA SOLUTO')
  .addChassis('LUXURY')
  .build();

// Sử dụng 1 builder nhiều lần sẽ phải khai báo đủ mọi trường của class. Nên tạo mới mỗi lần khởi tạo nếu muốn lấy default value như dưới

const carBuilder2 = new CarBuilder();
const v10Car = carBuilder2
  .addSpecialEngine('v10')
  .addBody('KIA SOLUTO LUXURY')
  .build();

console.log('kakaka Car', v12Car.toString());
console.log('kakaka Car2', v13Car.toString());
console.log('kakaka Car3', v10Car.toString());
