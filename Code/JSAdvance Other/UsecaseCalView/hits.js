// # Usecase tính toán lượt view

const redis = require("./connections/init.redis");

// Có thể test hàm trực tiếp server nodejs bằng cách chạy ở đây
async function addVideo(videoId){
  console.log(await redis.set(`video::${videoId}`, 0));
}

async function playVideo(videoId, userId){
  // // K được cộng view trực tiếp mỗi khi get
  // await redis.incrby(`video::${videoId}`, 1);
  // console.log(await redis.get(`video::${videoId}`));

  // Cách chuẩn
  try{
    const keyVideo = `video::${videoId}`;
    const keyUserId = `user::${userId}`;

    // Nếu k tồn tại, thì set giá trị expire sau 10s
    const isOk = await redis.set(keyUserId, "hits", "NX", "EX", 10);
    console.log(`isOk::`, isOk);

    if(isOk === "OK") {
      await redis.incrby(`video::${videoId}`, 1);
      console.log(await redis.get(`video::${videoId}`));
    }

    // Ở đây user chỉ cần gửi request sau mỗi 10s là được, thực tế frontend phải check user xem đủ 30s theo thuật toán định sẵn nữa

  } catch(err){
    console.error(`Error: playVideo::`, err);
  }
}

// addVideo(10001);
playVideo(10001, 101); // Giả sử userid là 101

