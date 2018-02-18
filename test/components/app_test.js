import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group similar tests
describe('App', () => {
  //use it to test a single attribute of a target (one specific test)
  it('shows the correct test', () => {
    //create instance of App
    const component = renderComponent(App);

    //expect to make an assertion about a target
    expect(component).to.contain('React simple starter');
  });
});
