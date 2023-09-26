import { data } from "../../../data";
import { useState } from "react";
import React from "react";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	const removeItem = (id) => {
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};
	// const clearAllItems = () => {
	// 	setPeople([]);
	// };
	return (
		<div>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id}>
						<h4>{name}</h4>
						<button type="button" onClick={() => removeItem(id)}>
							Remove
						</button>
					</div>
				);
			})}
			<button
				type="button"
				className="btn"
				onClick={() => setPeople()}
				style={{ marginTop: "2rem" }}
			>
				Clear All
			</button>
		</div>
	);
};

export default UseStateArray;
