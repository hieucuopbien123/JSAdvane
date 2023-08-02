const amqplib = require("amqplib");

const amqp_url_cloud = "amqps://mxbbqaeb:tOPwP2Fwtxvtql-V9i3NbtA-nxEnJmZD@armadillo.rmq.cloudamqp.com/mxbbqaeb";
const amqp_url_docker = "amqp://localhost:5672";

const receiveQueue = async () => {
  try{
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    const nameQueue = "Q1";
    await channel.assertQueue(nameQueue, { 
      durable: true,
    });

    channel.prefetch(1);

    await channel.consume(nameQueue, msg => { // Phải lắng nghe đúng Q1
      console.log("MSG::", msg.content.toString());
    }, {
      noAck: false, 
      // Xử lý xong, consumer sẽ gửi lại queue noAck. false thì queue k xóa message; true là queue xóa message luôn. Default là false.
    });
    
    // // Cú pháp khác
    // await channel.consume(nameQueue, (msg) => {
    //   console.log("MSG::", msg.content.toString());
    //   channel.ack(msg);
    // });
  } catch (err){
    console.error("Error::", err.message);
  }
}

receiveQueue();
