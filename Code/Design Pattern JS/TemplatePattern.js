class MessageSender {
  sendMessage(recipient, message) {
    this.connect();
    this.authenticate();
    this.sendMessageImpl(recipient, message);
    this.disconnect();
  }

  sendMessageImpl(recipient, message) {
    throw new Error("sendMessageImpl method must be implemented.");
  }

  connect() {
    console.log("Connecting...");
  }

  disconnect() {
    console.log("Disconnecting...");
  }

  authenticate() {
    console.log("Authenticating...");
  }
}

class EmailMessageSender extends MessageSender {
  sendMessageImpl(recipient, message) {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

class SmsMessageSender extends MessageSender {
  sendMessageImpl(recipient, message) {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

class PushNotificationMessageSender extends MessageSender {
  sendMessageImpl(recipient, message) {
    console.log(`Sending push notification to ${recipient}: ${message}`);
  }
}

const emailSender = new EmailMessageSender();
emailSender.sendMessage("john@example.com", "Hello from JavaScript!");

const smsSender = new SmsMessageSender();
smsSender.sendMessage("+1234567890", "Hello from JavaScript!");

const pushNotificationSender = new PushNotificationMessageSender();
pushNotificationSender.sendMessage("jane@example.com", "Hello from JavaScript!");
