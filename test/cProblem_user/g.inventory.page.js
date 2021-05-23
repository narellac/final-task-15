class inventoryPage {
  get inputUser () { return $('#user-name') }
  get inputPassword () { return $('#password') }
  get btnLogin () { return $('#login-button') }
  get productSort () { return $$('.product_sort_container')[0] }
  get elementOfSortZa () { return $('[value="za"]') }
  get elementOfSortLohi () { return $('[value="lohi"]') }
  get elementOfSortHilo () { return $('[value="hilo"]') }
  get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
  get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
  get btnToShopThree () { return $$('.btn_primary')[0] }
  get btnToShopFour () { return $$('.btn_primary')[1] }
  get btnToShopFive () { return $('#add-to-cart-sauce-labs-onesie') }
  get btnToShopSix () { return $$('.btn_primary')[2] }
  get btnToDeleteOne () { return $('#remove-sauce-labs-backpack') }
  get btnToDeleteTwo () { return $('#remove-sauce-labs-bike-light') }
  get btnToDeleteFive () { return $('#remove-sauce-labs-onesie') }

    login (user, password) {
      this.inputUser.setValue(user);
      this.inputPassword.setValue(password);
    }

    open () {
      return browser.url('https://www.saucedemo.com/');
    }
  }

  module.exports = new inventoryPage();