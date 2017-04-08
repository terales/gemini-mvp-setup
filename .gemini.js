module.exports = {
  rootUrl: 'http://yandex.ru',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',

  screenshotsDir: './test-e2e-screenshots/screens',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
