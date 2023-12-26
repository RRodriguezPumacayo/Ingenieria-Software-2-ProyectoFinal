const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('EnterReact', function() {
  this.timeout(30000);
  let driver;

  beforeEach(async function() {
    try {
      // Configura el controlador de Gecko (geckodriver)
      driver = await new Builder()
          .forBrowser('chrome')
          .setFirefoxOptions(new firefox.Options())
          .usingServer('http://127.0.0.1:4445')
          .build();
    } catch (error) {
      console.error('Error al configurar el controlador de Gecko:', error);
    }
  });

  afterEach(async function() {
    try {
      if (driver) {
        await driver.quit();
      }
    } catch (error) {
      console.error('Error al cerrar el navegador:', error);
    }
  });

  it('EnterReact', async function() {
    try {
      if (!driver) {
        throw new Error('El controlador no está definido.');
      }

      await driver.get("http://localhost:8080/");
      await driver.manage().window().setRect({ width: 782, height: 872 });
      await driver.findElement(By.linkText("React")).click();
      await driver.quit();
    } catch (error) {
      console.error('Error durante las pruebas:', error);
      throw error;
    }
  });
});
