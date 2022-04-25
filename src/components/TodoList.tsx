import { useEffect, useState } from 'react';
import { MdRadioButtonUnchecked, MdOutlineCheckCircleOutline , MdEdit} from 'react-icons/md';
import { getTodos } from '../api';

interface Item {
	title: string;
	completed: boolean;
}

const Item = (props: Item) => {
	const { title, completed } = props;
	return (
		<li className="py-3 flex items-center w-full">
			<div onClick={() => null} className="cursor-pointer">
				{completed ? (
					<MdOutlineCheckCircleOutline fontSize={32} color="#02964e" />
				) : (
					<MdRadioButtonUnchecked fontSize={32} color="#374151" />
				)}
			</div>
            <p className='ml-5 w-full flex max-w-xs sm:max-w-md md:max-w-lg'>{title}</p>
            <div className='justify-self-end cursor-pointer'><MdEdit fontSize={21} color="#374151" /></div>
		</li>
	);
};

export const TodoList = () => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const todos = [
		{ id: 1, title: 'jdfgjdsfhk jewh jkhsd fkhsfjkdh jskfh hjs hdjksa hdksad kdj hjd sk kjdhjkhdfj kHSJD HJDFH JFHA JJ HSFDJH JHS HSD FJHSDFK ker', completed: false },
		{ id: 2, title: 'jdfgjker', completed: true },
		{ id: 3, title: 'jdfgjker', completed: false }
	];

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	const fetchData = async () => {
	// 		try {
	// 			const results = await getTodos();
	// 			setResults(results.data.results);
	// 		} catch (error) {
	// 			setIsError(true);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	// Calling fetch and set delay of one sec
	// 	let timer = setTimeout(() => fetchData(), 1000);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, []);

	return (
		<div className="flex w-full justify-center items-center min-w-fit">
			<div className="flex flex-col max-w-md min-w-max justify-center items-center p-5 mt-10 mx-5 white-glassmorphism">
				<h1 className="text-3xl sm:text-5xl text-white font-thin py-1">TODO LIST</h1>
				<input
					type="text"
					// value={value}
					// onChange={(e) => handleChange(e, name)}
					className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-gray-700 border-none text-sm white-glassmorphism"
				/>
				<button
					type="button"
					// onClick={handleSubmit}
					className="text-gray-700 w-full mt-2 border-[1px] p-2 border-lime-50 hover:bg-lime-50 rounded-full cursor-pointer"
				>
					ADD
				</button>

				<ul className="flex flex-col w-full mt-10 text-gray-700 justify-center divide-y max-h-80 overflow-auto">
					{todos.map((item) => (
						<Item key={item.id} title={item.title} completed={item.completed} />
					))}
				</ul>
			</div>
		</div>
	);
};
