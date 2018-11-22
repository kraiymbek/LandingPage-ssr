import { TestWindow } from '@stencil/core/testing';
import { ContactsComponent } from './contacts-component';

describe('contacts-component', () => {
  it('should build', () => {
    expect(new ContactsComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLContactsComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ContactsComponent],
        html: '<contacts-component>' 
          + '</contacts-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
