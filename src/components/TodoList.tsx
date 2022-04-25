import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoFetch, getTodosFetch, putTodoFetch } from '../todoState';
import { Button } from './Button';
import { Input } from './Input';
import { Loader } from './Loader';
import { TodoItem } from './TodoItem';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export const TodoList = () => {
	const { todos, isListLoading, isAddLoading, isItemLoading, editingId } = useSelector((state: any) => state.todos);
	const [newTodo, setNewTodo] = useState<string>('');
	const dispatch = useDispatch();

	const handleAddClick = () => {
		dispatch(addTodoFetch(newTodo));
		setNewTodo('');
	};

	useEffect(() => {
		dispatch(getTodosFetch());
	}, [dispatch]);

	return (
		<div className="flex w-full h-full justify-center items-center min-w-fit">
			<div className="flex flex-col w-80 md:w-1/2 h-3/5 items-center p-5 mx-5 white-glassmorphism">
				<h1 className="text-3xl sm:text-5xl text-white font-thin py-1">TODO LIST</h1>
				<Input value={newTodo} onChange={setNewTodo} />
				<Button isLoading={isAddLoading} onClick={handleAddClick}>
					ADD
				</Button>
				{isListLoading ? (
					<div className="flex w-full h-full justify-center items-center">
						<Loader />
					</div>
				) : (
					<div className="flex w-full h-80 mt-3 justify-center">
						<ul className="w-full h-full text-gray-700 justify-center divide-y overflow-auto ">
							{todos.map((item: Todo) => (
								<TodoItem
									key={item.id}
									item={item}
									isItemLoading={isItemLoading && editingId === item.id}
									onItemChange={(editedTodo: Todo) => dispatch(putTodoFetch(editedTodo))}
								/>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
