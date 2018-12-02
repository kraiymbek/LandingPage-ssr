import { TestWindow } from '@stencil/core/testing';
import { InputField } from './input-field';

describe('input-field', () => {
  it('should build', () => {
    expect(new InputField()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLInputFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [InputField],
        html: '<input-field>' 
          + '</input-field>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
