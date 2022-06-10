import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Search = () => {
	const { searchString, setSearchString } = useContext(AppContext);

	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="search-container">
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" placeholder={searchString} />
			</form>
		</section>
	);
};

export default Search;
