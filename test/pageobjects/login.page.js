class LoginPage {
get inputUser () { return $('#user-name') }
get inputPassword () { return $('#password') }
get alertBox () { return $$('.error-button')[0] }
get btnLogin () { return $('#login-button') }

  login (user, password) {
    this.inputUser.setValue(user);
    this.inputPassword.setValue(password);
  }
  setUser (value){
    this.inputUser.click();
    this.inputUser.setValue(value);
    this.inputUser.keys("Tab");
  }
  setPassword (value){
    this.inputPassword.click();
    this.inputPassword.setValue(value);
    this.inputPassword.keys("Tab");
  }
  open () {
    return browser.url('https://www.saucedemo.com/');
  }
}

module.exports = new LoginPage();