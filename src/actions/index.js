import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = "karims12345";
const ROOT_URL= 'http://reduxblog.herokuapp.com/api';


export function fetchPosts(){

const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}
