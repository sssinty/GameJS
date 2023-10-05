export default class Validator {
  constructor(userName) {
      this.userName = userName;
  }
  validateUsername(userName) {
    const resultUserName = /^(?!.*\d$)(?!\d.*$)^(?!_.*$)^(?!-.*$)(?!.*_$)(?!.*-$)(?!.*\d{4})[-\w_,.!? ]+$/;
    if(userName.match(resultUserName)) {
      return userName;
    } else {
      throw new Error('Имя не должно содержать более трёх цифр, а также начинаться и заканчиваться цифрами, знаками - и _');
    }
  }

} 