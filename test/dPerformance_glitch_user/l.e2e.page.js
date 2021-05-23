class e2ePage {
  get inputUser () { return $('#user-name') }
  get inputPassword () { return $('#password') }
  get btnLogin () { return $('#login-button') }
  get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
  get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
  get btnToShopThree () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
  get btnCart () { return $$('.shopping_cart_link')[0] }
  get btnRemove () { return $$('.cart_button') }
  get btnCheckOut () { return $('#checkout') }
  get inputName () { return $('#first-name') }
  get inputLastName () { return $('#last-name') }
  get inputPostalCode () { return $('#postal-code') }
  get btnContinue () { return $('#continue') }
  get btnFinish () { return $('#finish') }
  get btnBack () { return $('#back-to-products') }
  get btnList () { return $('#react-burger-menu-btn') }
  get logout () { return $('#logout_sidebar_link') }


  login (user, password) {
    this.inputUser.setValue(user);
    this.inputPassword.setValue(password);
  }

  complete (name, lastname, postal) {
    this.inputName.click();
    this.inputName.setValue(name);
    this.inputName.keys("Tab");
    this.inputLastName.setValue(lastname);
    this.inputLastName.keys("Tab");
    this.inputPostalCode.setValue(postal);
  }

  open () {
    return browser.url('https://www.saucedemo.com/');
  }
}

module.exports = new e2ePage();