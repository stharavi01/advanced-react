import React, { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
	const [user, setUser] = useState({ name: "bob" });
	const logout = () => {
		setUser(null);
	};
	return (
		<nav className="navbar">
			<h5>CONTEXT API</h5>
			<NavLinks user={user} logout={logout} />
		</nav>
	);
}

export default Navbar;
