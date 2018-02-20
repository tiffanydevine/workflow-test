import { SAVE_COMMENT } from './type.js'; 

export function saveComment(comment) {
  return { 
    type: SAVE_COMMENT, 
    payload: comment
  }
}; 
