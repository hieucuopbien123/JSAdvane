// # Version 20 nodejs
console.log(process.env.TEST, process.env.TEST2);
// cd vào thư mục -> Chạy "TEST=a TEST2=b node test1.js" (chạy trong git bash mới được, powershell k nhận)

console.log(process.env.BLOG, process.env.YOUTUBE);
// VD version 20: node --env-file .env --env-file .env.development test1.js
// Khi có nhiều file env, nó sẽ duyệt ưu tiên từ phải qua

