const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
  beforeAll("Open browser", () => {
    browser.refresh();
    LoginPage.open();
  });
  describe("password test", () => {
    it("if password input is empty show the proper message", () => {
      LoginPage.setUser("standard_user");
      LoginPage.inputPassword.keys("Tab");
      LoginPage.btnLogin.click();
      expect(LoginPage.alertBox).toHaveText('');
      browser.pause(2000);
    });
    it("if password is invalid show the proper message", () => {
      LoginPage.setUser("standard_user");
      LoginPage.setPassword("contraseña");
      LoginPage.btnLogin.click();
      expect(LoginPage.alertBox).toHaveText('');
      browser.pause(2000);
    });
  });
  describe("user test", () => {
  it("if username input is empty show the proper message", () => {
    LoginPage.inputUser.click();
    LoginPage.inputUser.keys("Tab");
    LoginPage.btnLogin.click();
    expect(LoginPage.alertBox).toHaveText('');
    browser.pause(2000);
  });
  it("if username is invalid show the proper message", () => {
    LoginPage.setUser("random user");
    LoginPage.setPassword("secret_sauce");
    LoginPage.btnLogin.click();
    expect(LoginPage.alertBox).toHaveText('');
    browser.pause(2000);
  });
});
  describe("both inputs", () => {
    it("if username and password are empty show the proper message", () => {
      LoginPage.inputUser.click();
      LoginPage.inputUser.keys("Tab");
      LoginPage.inputPassword.click();
      LoginPage.inputPassword.keys("Tab");
      LoginPage.btnLogin.click();
      expect(LoginPage.alertBox).toHaveText('');
      browser.pause(2000);
    });
    it("if username and password are wrong show the proper message", () => {
      LoginPage.login("random user", "random password");
      LoginPage.btnLogin.click();
      expect(LoginPage.alertBox).toHaveText('');
      browser.pause(2000);
    });
    it("if username and password are right let me in", () => {
      LoginPage.login("standard_user", "secret_sauce");
      LoginPage.btnLogin.click();
      expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      browser.refresh();
      browser.pause(2000);
    });
  });
});

