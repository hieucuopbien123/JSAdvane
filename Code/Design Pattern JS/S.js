class Order {
  constructor(userId){
    this.userId = userId;
    this.timeOrder = Date.now();
    this.products = [];
  }
}
class OrderManager {
  constructor(){
    this.order = null;
  }
  createOrder(userId){
    this.order = new Order(userId);
    return this.order;
  }
  addProduct(product){
    this.order.products.push(product);
  }
  getOrder(){
    return this.order;
  }
  isValid(){
    return !!this.order.products.length;
    // convert nonboolean sang boolean bằng !! thay vì dùng check != 0. Ở đây ta convert 0 sang false
  }
  sendOrder(){
    if(this.isValid()){
      this.orderSendMail = new SendMailOrder(this);
      return this.orderSendMail.sendMail(this.order);
    }
    return 0;
  }
}
// Tách riêng sang SendMailOrder class tuân theo SRP chứ k viết trong class OrderManager
class SendMailOrder {
  sendMail(order){
    console.log("Send mail to https://aliconcon.com/api/orders success::", order);
    return 1;
  }
}
const orderManager = new OrderManager();
orderManager.createOrder("userId-001");
orderManager.addProduct({productId: 101, quantity: 2, price: 1_000, unit: "USD"});
orderManager.addProduct({productId: 121, quantity: 3, price: 2_000, unit: "USD"});
console.log("Order Info::", orderManager.getOrder());
console.log("Send mail::", orderManager.sendOrder());
