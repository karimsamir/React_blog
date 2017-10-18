import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      break;
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState =  { ...state, };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data};
      break;
      // case CREATE_POST:
      //   return _.mapKeys(action.payload.data, 'id');
      //   break;
      case DELETE_POST:
      // delete the post from state
        return _.omit(state, action.payload);
        break;
    default:
    return state;

  }
}
