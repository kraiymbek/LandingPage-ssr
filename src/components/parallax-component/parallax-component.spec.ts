import { TestWindow } from '@stencil/core/testing';
import { ParallaxComponent } from './parallax-component';

describe('parallax-component', () => {
  it('should build', () => {
    expect(new ParallaxComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLParallaxComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ParallaxComponent],
        html: '<parallax-component>' 
          + '</parallax-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
