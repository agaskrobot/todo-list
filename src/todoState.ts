import { createSlice } from '@reduxjs/toolkit';
import { Todo } from './components/TodoList';
export interface TodoState {
	todos: Array<Todo>;
	isListLoading: boolean;
	isAddLoading: boolean;
	isItemLoading: boolean;
	editingId: number | null;
}

const initialState: TodoState = {
	todos: [],
	isListLoading: false,
	isAddLoading: false,
	isItemLoading: false,
	editingId: null
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		getTodosFetch: (state) => {
			state.isListLoading = true;
		},
		getTodosSuccess: (state, action) => {
			state.todos = action.payload;
			state.isListLoading = false;
		},
		getTodosFailure: (state) => {
			state.isListLoading = false;
			state.isAddLoading = false;
			state.isItemLoading = false;
		},
		addTodoFetch: (state, action) => {
			action = action;
			state.isAddLoading = true;
		},
		addTodosSuccess: (state, action) => {
			state.todos = [action.payload, ...state.todos];
			state.isAddLoading = false;
		},
		putTodoFetch: (state, action) => {
			state.editingId = action.payload.id;
			state.isItemLoading = true;
		},
		putTodosSuccess: (state, action) => {
			state.editingId = null;
			const foundIndex = state.todos.findIndex((x) => x.id == action.payload.id);
			state.todos[foundIndex] = action.payload;
			state.isItemLoading = false;
		}
	}
});

export const {
	getTodosFetch,
	getTodosSuccess,
	getTodosFailure,
	addTodoFetch,
	addTodosSuccess,
	putTodoFetch,
	putTodosSuccess
} = todoSlice.actions;

export default todoSlice.reducer;
