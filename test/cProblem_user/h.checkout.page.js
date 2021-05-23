class checkoutPage {
  get inputUser () { return $('#user-name') }
  get inputPassword () { return $('#password') }
  get btnLogin () { return $('#login-button') }
  get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
  get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
  get btnToShopFive () { return $('#add-to-cart-sauce-labs-onesie') }
  get btnCart () { return $$('.shopping_cart_link')[0] }
  get btnRemove () { return $$('.cart_button') }
  get btnCheckOut () { return $('#checkout') }
  get inputName () { return $('#first-name') }
  get inputLastName () { return $$('.form-input')[1] }
  get inputPostalCode () { return $('#postal-code') }
  get btnContinue () { return $('#continue') }
  get alertBox () { return $$('.error-message-container')[0] }


  login (user, password) {
    this.inputUser.setValue(user);
    this.inputPassword.setValue(password);
  }

  complete (name, postal) {
    this.inputName.click();
    this.inputName.setValue(name);
    this.inputName.keys("Tab");
    this.inputName.keys("Tab");
    this.inputPostalCode.setValue(postal);
  }

  open () {
    return browser.url('https://www.saucedemo.com/');
  }
}

module.exports = new checkoutPage();