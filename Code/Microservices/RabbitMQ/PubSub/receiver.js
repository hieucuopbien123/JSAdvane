// # Use pubsub 
// Dùng fanout exchange

const amqplib = require("amqplib");

// .env
const amqp_url_cloud = "amqps://mxbbqaeb:tOPwP2Fwtxvtql-V9i3NbtA-nxEnJmZD@armadillo.rmq.cloudamqp.com/mxbbqaeb";
const amqp_url_docker = "amqp://localhost:5672";

const receive = async () => {
  try{
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    const nameExchange = "video";
    await channel.assertExchange(nameExchange, "fanout", {
      durable: false
    });

    // Tạo queue subscribe vào exchange
    const { queue } = await channel.assertQueue("", {
      exclusive: true, 
      // Khi dùng pubsub với fanout, ta k xđ routing key nên nó kqtr việc đặt tên queue là gì, do đó ta để rỗng thì rabbitMQ sẽ tự sinh random name cho ta. Dùng exclusive true thì khi tắt sẽ tự xóa queue này luôn
    });
    console.log("nameQueue::", queue);

    await channel.bindQueue(queue, nameExchange, "");
    await channel.consume(queue, msg => {
      console.log("msg::", msg.content.toString());
    }, {
      noAck: true
    })
  } catch(err){
    console.log(err.message);
  }
}

receive();