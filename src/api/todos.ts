import axios from 'axios/index';
import { Todo } from '../components/TodoList';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

// get all todos
export const getTodos = () =>
	axios.get(baseURL, {
		params: {
			_limit: 10
		}
	});

// add todo
export const addNewTodo = (title: string) => axios.post(baseURL, { title: title });

// edit todo
export const editTodo = (todo: Todo) => axios.put(`${baseURL}/${todo.id}`, todo );
