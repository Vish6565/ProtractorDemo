describe('Demo claculator test', function () {

    it('Addition of two number', function () {

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('5');
        element(by.css('[ng-click="doAddition()"]')).click();

        browser.sleep(5000);

    });


});