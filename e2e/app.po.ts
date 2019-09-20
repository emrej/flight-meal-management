import { browser, by, element } from 'protractor';

export class StarterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('div h1')).getText();
  }
}
