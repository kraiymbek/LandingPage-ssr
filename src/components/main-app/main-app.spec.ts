import { TestWindow } from '@stencil/core/testing';
import { MainApp } from './main-app';

describe('main-app', () => {
  it('should build', () => {
    expect(new MainApp()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMainAppElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MainApp],
        html: '<main-app>' 
          + '</main-app>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
