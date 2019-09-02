import { StarterPage } from './app.po';

describe('starter App', () => {
  let page: StarterPage;

  beforeEach(() => {
    page = new StarterPage();
  });

  it('should display message App started', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('App started!');
  });
});
