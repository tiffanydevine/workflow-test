import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    //expect to make an assertion about a target
    expect(component.find('.comment-box')).to.exist;
  });
});
