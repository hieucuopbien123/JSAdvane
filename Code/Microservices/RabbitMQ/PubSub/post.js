// # Use pubsub 
// Dùng fanout exchange

const amqplib = require("amqplib");

// .env
const amqp_url_cloud = "amqps://mxbbqaeb:tOPwP2Fwtxvtql-V9i3NbtA-nxEnJmZD@armadillo.rmq.cloudamqp.com/mxbbqaeb";
const amqp_url_docker = "amqp://localhost:5672";

const postVideo = async ({ msg }) => {
  try{
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    const nameExchange = "video"; // K tạo queue mà tạo exchange

    await channel.assertExchange(nameExchange, "fanout", {
      durable: false
    });
    await channel.publish(nameExchange, "", Buffer.from(msg)); 
    // Param 2 là routing key để xđ queue cụ thể queue nào được nhận, ở đây ta cho phép mọi queue đều có thể nhận miễn là subscribe và exchange này

    console.log("Send Ok:::", msg);
    setTimeout(function () {
      conn.close();
      process.exit(0);
    }, 2000);
  } catch(err){
    console.log(err.message);
  }
}

postVideo({ msg: "Hello World" });