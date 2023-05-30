// Yêu cầu viết 1 module get giá tùy TH. Tùy vào các case khác nhau sẽ có cách get giá khác nhau => if else với strategy pattern tránh code smell

/**
 * Giảm giá khi người dùng đặt trước một sản phẩm
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.2;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ?  originalPrice * 0.1 : originalPrice - 30;
}
function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ?  originalPrice * 0.2 : originalPrice - 50;
}
function defaultPrice(originalPrice) {
  return originalPrice;
}

// Các hàm xử lý price được export từ 1 file khác. K được viết hàm xử lý chi tiết vào trong hàm dưới
const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  defaultPrice,
}
function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}
console.log('-->>>',  getPrice(200,  'blackFriday'))