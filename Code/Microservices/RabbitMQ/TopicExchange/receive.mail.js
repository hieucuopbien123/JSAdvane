// # Use pubsub / Dùng topic exchange

const amqplib = require("amqplib");

// .env
const amqp_url_docker = "amqp://localhost:5672";

const receiveMail = async () => {
  try{
    // Tạo channel
    const conn = await amqplib.connect(amqp_url_docker);
    const channel = await conn.createChannel();

    // Xđ exchange
    const nameExchange = "send_email";
    await channel.assertExchange(nameExchange, "topic", {
      durable: false
    });

    // Tạo queue mói
    const { queue } = await channel.assertQueue("", {
      exclusive: true, 
    });

    // Bind queue với exchange có routing key, duyệt để bind từng key
    const args = process.argv.slice(2);
    if(!args.length){
      process.exit(0);
    }
    console.log(`Waiting in nameQueue::${queue}::topic::${args}`);
    args.forEach(async key => {
      await channel.bindQueue(queue, nameExchange, key); // bind với routing key riêng
    })

    // Subscribe nhận message
    await channel.consume(queue, msg => {
      console.log(`Routing key::${msg.fields.routingKey} and msg::${msg.content.toString()}`);
    });
  } catch(err){
    console.log(err.message);
  }
}

receiveMail();

// node receive.mail.js "dev.test" => routing key là dev.test
// node receive.mail.js "*.test" => chỉ cần chứa chứa .test ở cuối
// node receive.mail.js "#.test" => chứa .test ở cuối và trước nó phải khác rỗng vì # là >= 1 ký tự bất kỳ
