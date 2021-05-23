const e2ePage = require("../aStandard_user/d.e2e.page");

describe("Auto start and load items to cart", () => {
  beforeAll("Open browser", () => {
    e2ePage.open();
  });
  it("if username and password are right let me in", () => {
    e2ePage.login("standard_user", "secret_sauce");
    e2ePage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  it("if I selected an item it should add to the cart shopping", () => {
    e2ePage.btnToShopOne.click();
    e2ePage.btnToShopTwo.click();
    e2ePage.btnToShopThree.click();
    browser.pause(2000);
  });
  it("if I click on the image of the car it should refer me", () => {
    e2ePage.btnCart.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    browser.pause(2000);
  });
  it("if I click on the REMOVE box this element should be deleted", () => {
    e2ePage.btnRemove[0].click();
    e2ePage.btnRemove[1].click();
    browser.pause(2000);
  });
});
  describe("Continue shopping", () => {
    it("If I press the checkout button it should redirect me", () => {
      e2ePage.btnCheckOut.click();
      browser.pause(2000);
    });
    it("if I stop in each field I must be able to complete it and send it", () => {
      e2ePage.complete("Narella", "Calvente", 2000);
      e2ePage.btnContinue.click();
      browser.pause(2000);
    });
  });
  describe("finalize the purchase and return to the beginning", () => {
    it("if I press the finish button and go back to the beginning it should proceed as such", () => {
    e2ePage.btnFinish.click();
    e2ePage.btnBack.click();
    browser.pause(2000);
    });
    it("if I press left sidebar and choose logout it should proceed like so", () => {
      e2ePage.btnList.click();
      e2ePage.logout.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/');
      browser.pause(2000);
    });
  });
