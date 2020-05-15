import React, { useState } from 'react';

const Filter = (history) => {
    const [filterValue, setfilterValue] = useState("");

    // const handleSearchChange = (e) => {
    //     setfilterValue(e.target.value);
    // }

    // const clickSearch = (e) => {
    //     e.preventDefault(); 
    //     history.history.push(`/${filterValue}`);
    // }

    return(
        <div className="mt-4 mb-4">
            <form className="form-inline search-groupping-style">
                Filter based on :
                    Date
            </form>
        </div>
    );
}

export default Filter;