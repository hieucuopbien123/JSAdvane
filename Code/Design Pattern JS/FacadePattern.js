class ShopPattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }
  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class Fees {
  calc(value) {
    return value * 1.05;
  }
}

module.export = { ShopPattern };

// Dùng
// function buy(price){
//   const shop  = new ShopPattern();
//   console.log(`Price:: ${shop.calc(price)}`);
// }
// buy(120000);
