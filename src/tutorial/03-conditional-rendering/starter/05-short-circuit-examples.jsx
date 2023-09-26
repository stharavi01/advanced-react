import { useState } from "react";

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("susan");
	const [user, setUser] = useState({ name: "john" });
	const [isEditing, setIsEditing] = useState(true);

	return (
		<div>
			{" "}
			{text || "default value"}
			{text && (
				<div>
					<h2>whatever return</h2>
					<h2>{name}</h2>
					<button type="button" className="btn">
						{isEditing ? "Edit" : "Add"}
					</button>
				</div>
			)}
		</div>
	);
};

export default ShortCircuitExamples;
