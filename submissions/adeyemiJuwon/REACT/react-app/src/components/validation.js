function validation(values) {
  let errors = {};
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number required';
  }
  if (!values.modeOfPayment) {
    errors.modeOfPayment = 'Choose a mode of payment';
  }
  if (!values.cardNumber) {
    errors.cardNumber = 'Card number can not be empty';
  }
  if (!values.cardName) {
    errors.cardName = 'Card name can not be empty';
  }
  if (!values.cardExpiredDate) {
    errors.cardExpiredDate = 'Card expired date is required';
  }
  if (!values.cardCvv) {
    errors.cardCvv = 'Card CVV is required';
  }
  return errors;
}

export default validation;
