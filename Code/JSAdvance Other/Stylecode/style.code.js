const AGE_REQUIRED = 30;
const isOldEnough = user => {
  return user?.age ?? 0 > 30;
}



const validateCreate = (create, isRobo) => {
  if(isRobo){
    // todo
  } else {
    // todo
  }
}
// Gọi trong mọi TH của isRobo => vi phạm solid. Nên tạo ra 1 class 1 nhiệm vụ
const validateHuman = user => {
  // todo
}
const validateRobo = create => {
  // todo
}



const mapCodeToText =
{
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  'default': "No Code",
}
const getTextFromText = code => {
  console.log(mapCodeToText[code] || mapCodeToText['default']);
}
getTextFromText(200);

// Cách nhanh nhất search key lấy object từ list
const mapCodeToTextUseMap = new Map([
  ['100', 'Continue'],
  ['101', 'Switching Protocols'],
  ['102', 'Processing'],
  ['103', 'Early Hints'],
  ['200', 'OK'],
  ['default', "No Code"],
]);
const getTextFromTextUseMap = code => {
  console.log(mapCodeToTextUseMap.get(code) || mapCodeToTextUseMap.get("default"));
}
getTextFromTextUseMap(200);
