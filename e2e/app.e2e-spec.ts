import { StarterPage } from './app.po';

describe('starter App', () => {
  let page: StarterPage;

  beforeEach(() => {
    page = new StarterPage();
  });

  it('should display message Flight Fare Finder', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Flight Fare Finder');
  });
});
