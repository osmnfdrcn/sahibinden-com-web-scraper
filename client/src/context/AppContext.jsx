import React, { useState } from "react";
import axios from "axios";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	const [searchString, setSearchString] = useState("tactix");

	return (
		<AppContext.Provider
			value={{
				searchString,
				setSearchString,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
