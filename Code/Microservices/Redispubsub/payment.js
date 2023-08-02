const express = require("express");
const app = express();
const redis = require("redis");
const subscriber = redis.createClient();

subscriber.subscribe("ordersystem", (message) => {
  console.log("The message payment is", JSON.parse(message));
})

async function connectRedis() {
  await subscriber.connect();
}
connectRedis();

app.listen(3001, () => {
  console.log("The order is running at 3001");
})