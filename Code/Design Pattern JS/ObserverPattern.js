// Mức độ basic

class Observer {
  constructor(name) {
    this.namePick = name;
  }
  update(location) {
    // Xử lý sự kiện phức tạp
    this.goToHelp(location);
  }
  goToHelp(location) {
    console.log(`${this.namePick} ping ::${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }
  addObserver(observer) {
    this.observerList.push(observer);
  }
  notify(location) {
    // location ở đây coi là 1 event mà subject này phát ra
    this.observerList.forEach(observer => observer.update(location))
  }
}

const subject = new Subject()
// observer
const riki = new Observer('Riki')
const sniper = new Observer('Sniper')

// subscribe
subject.addObserver(riki)
subject.addObserver(sniper)

// publish sự kiện
subject.notify({long: 123, lat: 106})

// Trong code 1 dự án thì Observer pattern dùng như trên nhưng khi dùng trong mô hình liên kết với remote thì sẽ hơi khác, như hàm notify có thể là update database của follower như push strategy.