import { call, put, takeEvery } from 'redux-saga/effects';
import { getTodos, addNewTodo } from './api';
import { editTodo } from './api/todos';
import { Todo } from './components/TodoList';
import { getTodosSuccess, getTodosFailure, addTodosSuccess, putTodosSuccess } from './todoState';

export interface ResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}

export interface Action {
	payload?: any;
}

function* fetchTodos() {
	try {
		const response: ResponseGenerator = yield call(getTodos);
		yield put(getTodosSuccess(response.data));
	} catch (e) {
		yield put(getTodosFailure());
		console.error(e);
	}
}

type AddParams = { payload: string; type: string };
function* addTodo({ payload }: AddParams) {
	try {
		const response: ResponseGenerator = yield call(() => addNewTodo(payload));
		yield put(addTodosSuccess(response.data));
	} catch (e) {
		yield put(getTodosFailure());
		console.error(e);
	}
}

type PutParams = { payload: Todo; type: string };
function* putTodo({ payload }: PutParams) {
	try {
		const response: ResponseGenerator = yield call(() => editTodo(payload));
		yield put(putTodosSuccess(response.data));
	} catch (e) {
		yield put(getTodosFailure());
		console.error(e);
	}
}

function* todoSaga() {
	yield takeEvery('todos/getTodosFetch', fetchTodos);
	yield takeEvery('todos/addTodoFetch', addTodo);
	yield takeEvery('todos/putTodoFetch', putTodo);
}

export default todoSaga;
