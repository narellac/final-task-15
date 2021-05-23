const inventoryPage = require("../dPerformance_glitch_user/j.inventory.page");

describe("Login automation", () =>{
  beforeAll("Open browser", () => {
    inventoryPage.open();
  }); // sumar algo para medir tiempo
  it("if username and password are right let me in", () => {
    inventoryPage.login("performance_glitch_user", "secret_sauce");
    inventoryPage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  describe("order list", () => {
    it("if I select any item from the list it sorts correctly", () => {
      inventoryPage.productSort.click();
      inventoryPage.elementOfSortZa.isClickable(true);
      inventoryPage.elementOfSortLohi.isClickable(true);
      inventoryPage.elementOfSortHilo.isClickable(true);
      browser.pause(2000);
    });
  });
  describe("add to cart", () => {
    it("if I select these elements it adds them to the cart", () => {
      inventoryPage.btnToShopOne.isClickable(true);
      inventoryPage.btnToShopTwo.isClickable(true);
      inventoryPage.btnToShopThree.isClickable(true);
      inventoryPage.btnToShopFour.isClickable(true);
      inventoryPage.btnToShopFive.isClickable(true);
      browser.pause(2000);
    });
  });
  describe("remove from cart", () => {
    it("if I press remove from the list it does it correctly", () => {
      inventoryPage.btnToDeleteOne.isClickable(true);
      inventoryPage.btnToDeleteTwo.isClickable(true);
      inventoryPage.btnToDeleteThree.isClickable(true);
      inventoryPage.btnToDeleteFour.isClickable(true);
      inventoryPage.btnToDeleteFive.isClickable(true);
      browser.refresh();
      browser.pause(2000);
    });
  });
});