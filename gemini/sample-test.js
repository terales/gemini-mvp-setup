gemini.suite('yandex-search', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('body')
        .ignoreElements('#banner')
        .capture('plain');
});
