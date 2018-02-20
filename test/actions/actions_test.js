import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/type'; 
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('save comment', () => {
    it('has the correct type', () => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT); 
    }); 
    it('has the correct payload', () => {
      const comment = 'howdy'
      const action = saveComment(comment); 
      expect(action.payload).to.equal(comment); 
    }); 


  })
});
