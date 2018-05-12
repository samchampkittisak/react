import axios from 'axios'
const API_URL = 'http://localhost:5835/api/curriculums';


export function getcurriculums() {
  const response = axios.get(API_URL);
  console.log('getcurriculums', response);
  return{
    type: 'GET_CURRICULUMS',
    payload: response
  }
}


export function createcurriculums(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}


export function deletecurriculums(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}
