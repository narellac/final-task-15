class inventoryPage {
  get inputUser () { return $('#user-name') }
  get inputPassword () { return $('#password') }
  get btnLogin () { return $('#login-button') }
  //btn to order list
  get productSort () { return $$('.product_sort_container')[0] }
  get elementOfSortZa () { return $('[value="za"]') }
  get elementOfSortLohi () { return $('[value="lohi"]') }
  get elementOfSortHilo () { return $('[value="hilo"]') }
  //btn ADD TO CART of each element
  get btnToShopOne () { return $('#add-to-cart-sauce-labs-backpack') }
  get btnToShopTwo () { return $('#add-to-cart-sauce-labs-bike-light') }
  get btnToShopThree () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
  get btnToShopFour () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
  get btnToShopFive () { return $('#add-to-cart-sauce-labs-onesie') }
  get btnToShopSix () { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') }
  //btn REMOVE of each element
  get btnToDeleteOne () { return $('#remove-sauce-labs-backpack') }
  get btnToDeleteTwo () { return $('#remove-sauce-labs-bike-light') }
  get btnToDeleteThree () { return $('#remove-sauce-labs-bolt-t-shirt') }
  get btnToDeleteFour () { return $('#remove-sauce-labs-fleece-jacket') }
  get btnToDeleteFive () { return $('#remove-sauce-labs-onesie') }
  get btnToDeleteSix () { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') }

    login (user, password) {
      this.inputUser.setValue(user);
      this.inputPassword.setValue(password);
    }

    open () {
      return browser.url('https://www.saucedemo.com/');
    }
  }

  module.exports = new inventoryPage();