import { HeroEditorAngular2Page } from './app.po';

describe('hero-editor-angular2 App', () => {
  let page: HeroEditorAngular2Page;

  beforeEach(() => {
    page = new HeroEditorAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
