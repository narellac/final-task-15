class inventoryPage {
get inputUser () { return $('#user-name') }
get inputPassword () { return $('#password') }
get btnLogin () { return $('#login-button') }
get productSort () { return $$('.product_sort_container')[0] }
get elementOfSort () { return $('[value="za"]') }
get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
get btnToShopThree () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }

  login (user, password) {
    this.inputUser.setValue(user);
    this.inputPassword.setValue(password);
  }

  open () {
    return browser.url('https://www.saucedemo.com/');
  }
}

module.exports = new inventoryPage();