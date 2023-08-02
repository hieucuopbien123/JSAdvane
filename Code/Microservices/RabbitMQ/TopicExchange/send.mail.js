// # Use pubsub / Dùng topic exchange

const amqplib = require("amqplib");

// .env
const amqp_url_docker = "amqp://localhost:5672";

const sendMail = async () => {
  try{
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    const nameExchange = "send_email";
    await channel.assertExchange(nameExchange, "topic", {
      durable: false
    });

    const args = process.argv.slice(2);
    const msg = args[1] || "Default1";
    const topic = args[0];
    console.log(`msg::${msg}::::topic::${topic}`);

    await channel.publish(nameExchange, topic, Buffer.from(msg)); 

    console.log("Send Ok:::", msg);
    setTimeout(function () {
      conn.close();
      process.exit(0);
    }, 2000);
  } catch(err){
    console.log(err.message);
  }
}

sendMail();

// node send.mail.js "dev.test" "This is message"
