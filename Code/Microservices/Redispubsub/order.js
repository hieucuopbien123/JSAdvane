const express = require("express");
const app = express();
const redis = require("redis");
const publisher = redis.createClient();

async function connectRedis() {
  await publisher.connect();
}
connectRedis();

app.get("/order", async (req, res) => {
  const order = [
    {
      productid: 1,
      price: 5000,
    }, 
    {
      productid: 2,
      price: 10000
    }
  ];

  // Xử lý payment và sendmail
  await publisher.publish("ordersystem", JSON.stringify(order));

  res.json({
    status: "success",
    message: "Thank you!"
  })
});

app.listen(3000, () => {
  console.log("The order is running at 3000");
})

// Để chạy: mở redis, chạy 3 file độc lập, gửi request GET http://localhost:3000/order