// Component interface
class Pizza {
  getDescription() {
    return "Pizza";
  }
  cost() {
    return 10;
  }
}

// Concrete component
class Margherita extends Pizza {
  getDescription() {
    return "Margherita";
  }
  cost() {
    return 10;
  }
}

// Giả sử từ đây ta muốn thêm 1 vài loại topping như phô mai hay cà chua cho bánh Margherita và thay đổi giá. Thay vì thêm thuộc tính topping hay viết cụ thể class PizaCheese, PizzaTomato, ta có thể tạo decorator class bọc từng tính năng thôi

// Decorator
class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  cost() {
    return this.pizza.cost();
  }
}

// Concrete decorators
class Cheese extends ToppingDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Cheese`;
  }

  cost() {
    return this.pizza.cost() + 2;
  }
}

class Tomato extends ToppingDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Tomato`;
  }

  cost() {
    return this.pizza.cost() + 1;
  }
}

// Usage
const margherita = new Margherita(); // Bánh Margherita
const margheritaWithCheese = new Cheese(margherita); // Bánh Margherita có phô mai
const margheritaWithCheeseAndTomato = new Tomato(margheritaWithCheese); // Bánh Margherita có phô mai và cà chua

console.log(margheritaWithCheeseAndTomato.getDescription()); // Output: Margherita, Cheese, Tomato
console.log(margheritaWithCheeseAndTomato.cost()); // Output: 13 => implement tính giá phải độc lập hoàn toàn

