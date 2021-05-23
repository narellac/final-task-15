class cartPage {
  get inputUser () { return $('#user-name') }
  get inputPassword () { return $('#password') }
  get btnLogin () { return $('#login-button') }
  get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
  get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
  get btnToShopThree () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
  get btnCart () { return $$('.shopping_cart_link')[0] }
  get btnRemove () { return $$('.cart_button') }
  get btnContShopping () { return $('#continue-shopping') }

  login (user, password) {
    this.inputUser.setValue(user);
    this.inputPassword.setValue(password);
  }

  open () {
    return browser.url('https://www.saucedemo.com/');
  }
}

module.exports = new cartPage();