import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<button type="button" className="btn" onClick={() => setToggle(!toggle)}>
				toggle component
			</button>
			{toggle && <Secondcomponent />}
		</div>
	);
};

const Secondcomponent = () => {
	useEffect(() => {
		console.log("This is interesting");
	}, []);
};

export default CleanupFunction;
