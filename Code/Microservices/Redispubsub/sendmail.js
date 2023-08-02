const express = require("express");
const app = express();
const redis = require("redis");
const subscriber = redis.createClient();

async function connectRedis() {
  await subscriber.connect();
}
connectRedis();

// Có thể subscribe rồi connect sau cũng tương tự
subscriber.pSubscribe("o*", (message, pattern) => {
  console.log("The pattern sendmail is", pattern);
  console.log("The message sendmail is", JSON.parse(message));
})

// subscriber.subscribe("ordersystem");
// subscriber.on("message", (channel, message) => {
//   console.log("The channel sendmail is ", channel);
//   console.log("The message sendmail is ", JSON.parse(message));
// })

app.listen(3002, () => {
  console.log("The order is running at 3002");
})