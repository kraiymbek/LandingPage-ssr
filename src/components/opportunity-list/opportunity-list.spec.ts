import { TestWindow } from '@stencil/core/testing';
import { OpportunityList } from './opportunity-list';

describe('opportunity-list', () => {
  it('should build', () => {
    expect(new OpportunityList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOpportunityListElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OpportunityList],
        html: '<opportunity-list>' 
          + '</opportunity-list>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
