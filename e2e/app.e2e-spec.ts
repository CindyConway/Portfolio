import { CindyConwayPage } from './app.po';

describe('cindy-conway App', function() {
  let page: CindyConwayPage;

  beforeEach(() => {
    page = new CindyConwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
