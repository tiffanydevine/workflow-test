import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/CommentBox';

describe('CommentBox', () => {
  //use it to test a single attribute of a target (one specific test)
  it('has a text area', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('text-area')).to.exist;
  });

  it('has a button', () => {
    //create instance of App
    const component = renderComponent(App);

    //expect to make an assertion about a target
    expect;
  });
});
