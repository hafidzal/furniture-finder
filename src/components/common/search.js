import React, { useState } from 'react';

const Search = (history) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const clickSearch = (e) => {
        e.preventDefault(); 
        history.history.push(`/${searchValue}`);
    }

    return(
        <div className="mt-4 mb-4">
            <form className="form-inline search-groupping-style">
                <div className="input-group mr-2">
                    <div className="input-group-append">
                        <span className="input-group-text append-logo-style"><i class="fas fa-search"></i></span>
                    </div>
                    <input 
                        value={searchValue}
                        onChange={handleSearchChange}
                        type="text"
                        className="form-control search-furniture-style"
                        placeholder="search furniture"
                    />
                    <div className="input-group-append">
                        <span className="input-group-text append-button-style">
                            <button 
                                onClick={clickSearch} 
                                className="btn btn-light btn-search-style"
                                type="submit" 
                            >
                                 <span aria-hidden="true" className="arrow-icon-style">
                                    &#8594;
                                    {/* <i className="fas fa-search"></i> */}
                                 </span>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;