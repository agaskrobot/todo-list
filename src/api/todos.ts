import axios from 'axios/index';

// get all todos
export const getTodos = () => axios.get('https://jsonplaceholder.typicode.com/todos');
