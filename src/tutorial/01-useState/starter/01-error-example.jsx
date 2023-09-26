const ErrorExample = () => {
	let count = 0;

	const handleClick = () => {
		count = count + 1;
		console.log(count);
	};

	return (
		<div>
			<h2>{count}</h2>
			<Button type="button" className="btn" onClick={handleClick}>
				Increase
			</Button>
		</div>
	);
};

export default ErrorExample;
