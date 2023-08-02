// Subject interface
class Image {
  display() {}
}

// RealSubject class
class RealImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.loadFromDisk(filename);
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }

  loadFromDisk(filename) {
    console.log(`Loading ${filename}`);
  }
}

// Proxy class
class ProxyImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  display() {
    if (this.realImage == null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Client code
const image = new ProxyImage("test.jpg");

// The first time we call display(), the RealImage object is created and loaded from disk
image.display();

// The second time we call display(), the RealImage object is not created again, it's just displayed vì đã được create và lưu lại ở proxy
image.display();
