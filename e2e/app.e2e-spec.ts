import { GuitarToolsPage } from './app.po';

describe('guitar-tools App', () => {
  let page: GuitarToolsPage;

  beforeEach(() => {
    page = new GuitarToolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
