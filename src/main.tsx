import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoState';
import todoSaga from './todoSaga';
import './index.css';

const saga = createSagaMiddleware();
const store = configureStore({
	reducer: { todos: todosReducer },
	middleware: [saga]
});
saga.run(todoSaga);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
