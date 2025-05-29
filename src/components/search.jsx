import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    //props are read only, they should never be changed by the
    //child component. This breaks the main behaviour of React.

    //also never mutate state directly, always use setState

    return (
        <div className="search">
            <div>
                <img src={"./public/search.svg"} alt="Search Icon" />

                <input
                    name={"searchInput"}
                    type="text"
                    placeholder={"Search through thousands of movies"}
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />
            </div>
        </div>
    )
}
export default Search
