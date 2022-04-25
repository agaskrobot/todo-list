import { useState } from 'react';
import { MdRadioButtonUnchecked, MdOutlineCheckCircleOutline, MdEdit, MdOutlineCheck } from 'react-icons/md';
import { Input } from './Input';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface Item {
	item: Todo;
	isItemLoading: Boolean;
	onItemChange: Function;
}

export const TodoItem = (props: Item) => {
	const { item, onItemChange, isItemLoading } = props;
	const [editActive, setEditActive] = useState<boolean>(false);
	const [newTodo, setNewTodo] = useState<string>(item.title);

	const handleCompletedChange = () => {
		if (!isItemLoading) onItemChange({ ...item, completed: item.completed ? !item.completed : true });
	};

	const handleSave = () => {
		setEditActive(false);
		onItemChange({ ...item, title: newTodo });
	};
	return (
		<li className="py-3 flex items-center w-full">
			<div onClick={handleCompletedChange} className={isItemLoading ? 'cursor-not-allowed' : 'cursor-pointer'}>
				{item.completed ? (
					<MdOutlineCheckCircleOutline fontSize={32} color="#02964e" />
				) : (
					<MdRadioButtonUnchecked fontSize={32} color="#374151" />
				)}
			</div>
			{editActive ? (
				<>
					<Input value={newTodo} onChange={setNewTodo} />
					<div onClick={handleSave} className="justify-self-end cursor-pointer pr-3">
						<MdOutlineCheck fontSize={21} color="#374151" />
					</div>
				</>
			) : (
				<>
					<p className="ml-5 w-full flex">{item.title}</p>
					<div
						onClick={() => setEditActive(true)}
						className={`justify-self-end cursor-pointer pr-3 ${
							isItemLoading ? 'cursor-not-allowed' : 'cursor-pointer'
						}`}
					>
						<MdEdit fontSize={21} color="#374151" />
					</div>
				</>
			)}
		</li>
	);
};
