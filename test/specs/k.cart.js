const cartPage = require("../dPerformance_glitch_user/k.cart.page");

describe("Auto start and load items to cart", () => {
  beforeAll("Open browser", () => {
    cartPage.open();
  });
  it("if username and password are right let me in", () => {
    cartPage.login("performance_glitch_user", "secret_sauce");
    cartPage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  it("if I selected an item it should add to the cart shopping", () => {
    cartPage.btnToShopOne.click();
    cartPage.btnToShopTwo.click();
    cartPage.btnToShopThree.click();
    browser.pause(2000);
  });
  describe("go to cart", () => {
    it("if I click on the image of the car it should refer me", () => {
      cartPage.btnCart.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
      browser.pause(2000);
    });
  });
  describe("remove an element from the cart and continue shopping", () => {
    it("If I click on the REMOVE box this element should be deleted", () => {
      cartPage.btnRemove[0].click();
      cartPage.btnRemove[1].click();
      browser.pause(2000);
    });
    it("if I click on the CONTINUE SHOPPING box the page must go to the inventory", () => {
      cartPage.btnContShopping.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      browser.refresh();
      browser.pause(2000);
    });
  });
});