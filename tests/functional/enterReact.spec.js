const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('EnterReact', function() {
  this.timeout(30000);
  let driver;

  beforeEach(async function() {
    try {
      // Configura el controlador de Chrome (chromedriver)
      const options = new chrome.Options();
      driver = await new Builder()
          .forBrowser('chrome')
          .setChromeOptions(options)
          .build();
    } catch (error) {
      console.error('Error al configurar el controlador de Chrome:', error);
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

      await driver.get("http://localhost:8090/");
      await driver.manage().window().setRect({ width: 782, height: 872 });
      await driver.findElement(By.linkText("React")).click();
      // No es necesario llamar a driver.quit() aquí, ya que se maneja en el afterEach
    } catch (error) {
      console.error('Error durante las pruebas:', error);
      throw error;
    }
  });
});
