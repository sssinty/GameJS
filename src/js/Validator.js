export default class Validator {
  constructor(userName) {
      this.userName = userName;
  }
  validateUsername(userName) {
    if (userName.match(/\d{4,4}/)) {
      return true;
    } if (userName.match(/^[a-z][\w-]+[a-z]$/i)) {
      return true;
    } else {
      return false;
    }
  }

} 