import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const increaseValue = () => {
		setTimeout(() => {
			setValue((prevValue) => prevValue + 1);
		}, 3000);
	};

	return (
		<div>
			<h1>{value}</h1>
			<button type="button" className="btn" onClick={increaseValue}>
				Click me
			</button>
		</div>
	);
};

export default UseStateGotcha;
