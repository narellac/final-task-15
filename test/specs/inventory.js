const inventoryPage = require("../pageobjects/inventory.page");

describe("Login automation", () =>{
  beforeAll("Open browser", () => {
    inventoryPage.open();
  });
  it("if username and password are right let me in", () => {
    inventoryPage.login("standard_user", "secret_sauce");
    inventoryPage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  describe("order list", () => {
    it("if i choose an item from the list it should reorder it", () => {
      inventoryPage.productSort.click();
      inventoryPage.elementOfSort.click();
      browser.pause(2000);
    });
  });
  describe("add to cart", () => {
    it("if I selected an item it should add to the cart shopping", () => {
      inventoryPage.btnToShopOne.click();
      inventoryPage.btnToShopTwo.click();
      inventoryPage.btnToShopThree.click();
      browser.refresh();
      browser.pause(2000);
    });
  });
});
