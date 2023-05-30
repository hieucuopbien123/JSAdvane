// Người dùng k có thẻ Visa để thanh toán bằng hàm pay
class VisaPayment {
  pay(paymentinfo){
    console.log(`Paying ${paymentinfo.amount} USD with Visa card ${payment.cardNumber}`);
  }
}

// Người dùng chỉ có ví Momo và giao diện nó k tương thích với Visa, nó k có hàm pay và cần dùng hàm pay của VisaPayment
class MomoPaymentInfo {
  constructor(cardNumber, expiryDate, cvv, momoAmount){
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.amount = momoAmount;
  }
}

// Tạo class chuyển đổi giao diện
class MomoPaymentAdapter {
  constructor(momoPaymentInfo){
    this.momoPaymentInfo = momoPaymentInfo;
  }

  convertToVisaPaymentInfo(momoPaymentInfo){
    const conversionRate = 23_000; 
    const visaAmount = momoPaymentInfo.amount / conversionRate;
    const visaPaymentInfo = { // Nên là biến class VisaPaymentInfo ở đây
      cardNumber: momoPaymentInfo.cardNumber,
      expiryDate: momoPaymentInfo.expiryDate,
      cvv: momoPaymentInfo.cvv,
      amount: visaAmount
    }
    return visaPaymentInfo;
  }

  payWithVisa(visaPayment){
    const convertedVisaPaymentInfo = this.convertToVisaPaymentInfo(this.momoPaymentInfo);
    visaPayment.pay(convertedVisaPaymentInfo);
  }
}

const momoPaymentInfo = new MomoPaymentInfo("123456789", "12/25", "123", 240000);
const momoAdapter = new MomoPaymentAdapter(momoPaymentInfo);
const visaPayment = new VisaPayment();
momoAdapter.payWithVisa(visaPayment);
