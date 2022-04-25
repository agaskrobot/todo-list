import { Loader } from './Loader';

interface Button {
	isLoading: Boolean;
	onClick: Function;
	children: any;
}

export const Button = ({ isLoading, onClick, children }: Button) => {
	const handleClick = (e: any) => {
		e.preventDefault();
		onClick();
	};
	return (
		<div className="flex w-full h-16">
			{isLoading ? (
				<div className="flex w-full h-full justify-center items-center">
					<Loader />
				</div>
			) : (
				<button
					type="button"
					onClick={handleClick}
					className="text-gray-700 w-full mt-2 border-[1px] p-2 border-lime-50 hover:bg-lime-50 rounded-full cursor-pointer"
				>
					{children}
				</button>
			)}
		</div>
	);
};
