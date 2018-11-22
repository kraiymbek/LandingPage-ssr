import { TestWindow } from '@stencil/core/testing';
import { CarouselComponent } from './carousel-component';

describe('carousel-component', () => {
  it('should build', () => {
    expect(new CarouselComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCarouselComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CarouselComponent],
        html: '<carousel-component>' 
          + '</carousel-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
