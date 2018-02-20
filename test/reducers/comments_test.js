import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments'; 
import { SAVE_COMMENT } from '../../src/actions/type'; 
console.log(SAVE_COMMENT, "Whaaaaa")

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    const reducer = commentReducer(undefined, {})
    expect(reducer).to.eql([]); 
  })

  it('handles action with type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'howdy'}
    expect(commentReducer([], action)).to.eql(['howdy']); 
  })
})