interface Input {
	value: any;
	onChange: Function;
}

export const Input = ({ value, onChange }: Input) => {
	const handleChange = (e: any) => {
		onChange(e.target.value);
	};
	return (
		<input
			autoFocus={true}
			type="text"
			value={value}
			onChange={handleChange}
			className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-gray-700 border-none text-sm white-glassmorphism"
		/>
	);
};
