import { TestWindow } from '@stencil/core/testing';
import { OpportunityItem } from './opportunity-item';

describe('opportunity-item', () => {
  it('should build', () => {
    expect(new OpportunityItem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOpportunityItemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OpportunityItem],
        html: '<opportunity-item>' 
          + '</opportunity-item>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
