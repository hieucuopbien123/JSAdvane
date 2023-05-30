class DiscountHandler {
  applyDiscount(order) {
    throw new Error("applyDiscount method must be implemented.");
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }
}

class OnlineOrderDiscountHandler extends DiscountHandler {
  applyDiscount(order) {
    if (order.getType() === "ONLINE" && order.getAmount() > 100) {
      return order.getAmount() * 0.1; // 10% discount
    } else {
      // K nhất thiết chỉ if else chuyển luôn. Có thể cần xử lý gắn thêm thông tin vào ở đây r mới cho đi tiếp như 1 middleware bth
      order.amount -= 1;
      return this.nextHandler.applyDiscount(order);
    }
  }
}

class PhoneOrderDiscountHandler extends DiscountHandler {
  applyDiscount(order) {
    if (order.getType() === "PHONE" && order.getAmount() > 50) {
      return order.getAmount() * 0.05; // 5% discount
    } else {
      return this.nextHandler.applyDiscount(order);
    }
  }
}

class DefaultDiscountHandler extends DiscountHandler {
  applyDiscount(order) {
    return 0; // no discount
  }
}

// Usage example
const onlineOrderHandler = new OnlineOrderDiscountHandler();
const phoneOrderHandler = new PhoneOrderDiscountHandler();
const defaultHandler = new DefaultDiscountHandler();

onlineOrderHandler.setNextHandler(phoneOrderHandler);
phoneOrderHandler.setNextHandler(defaultHandler);

// Process orders
class Order {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }

  getType() {
    return this.type;
  }

  getAmount() {
    return this.amount;
  }
}

const onlineOrder = new Order("PHONE", 150);
const onlineOrderDiscount = onlineOrderHandler.applyDiscount(onlineOrder);
console.log("Online order discount: " + onlineOrderDiscount);
