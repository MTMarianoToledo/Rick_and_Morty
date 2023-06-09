import SearchBar from "../SearchBar";

function Nav ({onSearch}) {
    return (
        <div className="nav">
            <SearchBar onSearch = {onSearch}/>
        </div>
    )
};

export default Nav;