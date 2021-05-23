const checkoutPage = require("../cProblem_user/h.checkout.page");

describe("Auto start and load items to cart", () => {
  beforeAll("Open browser", () => {
    checkoutPage.open();
  });
  it("if username and password are right let me in", () => {
    checkoutPage.login("problem_user", "secret_sauce");
    checkoutPage.btnLogin.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    browser.pause(2000);
  });
  it("if I selected an item it should add to the cart shopping", () => {
    checkoutPage.btnToShopOne.click();
    checkoutPage.btnToShopTwo.click();
    checkoutPage.btnToShopFive.click();
    browser.pause(2000);
  });
  it("if I click on the image of the car it should refer me", () => {
    checkoutPage.btnCart.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    browser.pause(2000);
  });
  it("if I click on the REMOVE box this element should be deleted", () => {
    checkoutPage.btnRemove[0].click();
    checkoutPage.btnRemove[1].click();
    browser.pause(2000);
  });
  describe("Continue shopping", () => {
    it("If I press the checkout button it should redirect me", () => {
      checkoutPage.btnCheckOut.click();
      browser.pause(2000);
    });
    it("if I stop in each field I must be able to complete it", () => {
      checkoutPage.complete("Narella", 2000);
      checkoutPage.btnContinue.click();
      expect(checkoutPage.alertBox).toHaveText("Error: Last Name is required");
      browser.pause(2000);
    });
    it("if I press to type my last name, it redirects me to the name container", () => {;
      checkoutPage.inputLastName.setValue('Calvente');
      expect(checkoutPage.inputLastName).toHaveText("");
      browser.refresh();
      browser.pause(2000);
    });
  });
});
