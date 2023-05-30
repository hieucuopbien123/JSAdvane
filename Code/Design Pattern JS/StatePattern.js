class PlayingState {
  play() {
    console.log('Video is already playing.');
  }
  pause(player) {
    console.log('Pausing video.');
    player.setState(new PausedState());
  }
  stop(player) {
    console.log('Stopping video.');
    player.setState(new StoppedState());
  }
}

class PausedState {
  play(player) {
    console.log('Resuming video.');
    player.setState(new PlayingState());
  }
  pause() {
    console.log('Video is already paused.');
  }
  stop(player) {
    console.log('Stopping video.');
    player.setState(new StoppedState());
  }
}

class StoppedState {
  play(player) {
    console.log('Starting video.');
    player.setState(new PlayingState());
  }
  pause() {
    console.log('Video is stopped. Cannot pause.');
  }
  stop() {
    console.log('Video is already stopped.');
  }
}

class VideoPlayer {
  constructor() {
    this.state = new StoppedState(); // Trạng thái mặc định là đã dừng
  }
  setState(state) {
    this.state = state; // Đổi state tùy ý
  }
  play() {
    this.state.play(); // Đổi theo logic
  }
  pause() {
    this.state.pause();
  }
  stop() {
    this.state.stop();
  }
}

const player = new VideoPlayer();
player.play(); // In ra "Starting video."
player.pause(); // In ra "Pausing video."
player.play(); // In ra "Resuming video."
player.stop(); // In ra "Stopping video."
player.stop(); // In ra "Video is already stopped."
