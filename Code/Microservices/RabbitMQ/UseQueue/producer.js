// # UseQueue
// Dùng durable, persistent, noAck, expiration, prefetch

const amqplib = require("amqplib");

// .env
const amqp_url_cloud = "amqps://mxbbqaeb:tOPwP2Fwtxvtql-V9i3NbtA-nxEnJmZD@armadillo.rmq.cloudamqp.com/mxbbqaeb";
const amqp_url_docker = "amqp://localhost:5672";

const sendQueue = async ({ msg }) => {
  try{
    // Tạo channel cho producer connect tới MQ
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    // Tạo (nếu chưa tồn tại) 1 queue trong MessageBroker và channel tương tác với nó
    const nameQueue = "Q1";
    await channel.assertQueue(nameQueue, { 
      durable: true,
    });

    await channel.sendToQueue(nameQueue, Buffer.from(msg), {
      persistent: true,
      // expiration: "20000", // 20s chưa được xử lý sẽ tự bị xóa khỏi MQ
    });
    // Buffer giúp chuyển dữ liệu dạng bytes, các MQ thường truyền bằng bytes hay bits vì nhanh hơn truyền data dạng object bth

  } catch (err){
    console.error("Error::", err.message);
  }
}

sendQueue({ msg: "Hello1" });
