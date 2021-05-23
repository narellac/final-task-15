const inventoryPage = require("../cProblem_user/g.inventory.page");

describe("Login automation", () =>{
  beforeAll("Open browser", () => {
    inventoryPage.open();
  });
  it("if username and password are right let me in", () => {
    inventoryPage.login("problem_user", "secret_sauce");
    inventoryPage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  describe("order list", () => {
    it("if I select a condition from the list it does not reorder me", () => {
      inventoryPage.productSort.click();
      inventoryPage.elementOfSortZa.isClickable(false);
      inventoryPage.elementOfSortLohi.isClickable(false);
      inventoryPage.elementOfSortHilo.isClickable(false);
      browser.pause(2000);
    });
  });
  describe("add to cart", () => {
    it("if I select these elements it adds them to the cart", () => {
      inventoryPage.btnToShopOne.isClickable(true);
      inventoryPage.btnToShopTwo.isClickable(true);
      inventoryPage.btnToShopFive.isClickable(true);
      browser.pause(2000);
    });
    it("if I select these elements it does not add them to the cart", () => {
      inventoryPage.btnToShopThree.isClickable(false);
      inventoryPage.btnToShopFour.isClickable(false);
      inventoryPage.btnToShopSix.isClickable(false);
      browser.pause(2000);
    });
  });
  describe("remove from cart", () => {
    it(" if i press to remove items from inventory this does not happen", () => {
      inventoryPage.btnToDeleteOne.isClickable(false);
      inventoryPage.btnToDeleteTwo.isClickable(false);
      inventoryPage.btnToDeleteFive.isClickable(false);
      browser.refresh();
      browser.pause(2000);
    });
  });
});