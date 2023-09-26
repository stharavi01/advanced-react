import { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Peter",
		age: 24,
		hobby: "Read Books",
	});

	const displayPerson = () => {
		setPerson({
			name: "John",
			age: 25,
			hobby: "Coding",
		});
	};

	return (
		<div>
			<h1>UseState Object Example</h1>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>Enjoys: {person.hobby}</h3>
			<button type="button" className="btn" onClick={displayPerson}>
				Show{person.name}
			</button>
			;
		</div>
	);
};

export default UseStateObject;
