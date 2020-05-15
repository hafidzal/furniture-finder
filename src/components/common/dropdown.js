import React, { useState, useEffect } from 'react';

const Dropdown = ({basedOn}) => {
    const url = `http://www.mocky.io/v2/5c9105cb330000112b649af8`;
    const [filter, setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const time = ['1 week', '2 week', '1 month']

    useEffect(() => {
        fetch(
            url, {
                method: "GET"
            }
        )
        .then(
            res => res.json()
        )
        .then(
            response => {
                switch(basedOn.id) {
                    case '1' :
                        setFilter(response.furniture_styles);
                        setIsLoading(false);
                        break;
                    case '2' :
                        setFilter(time);
                        setIsLoading(false);
                        break;
                }
            }
        )
        .catch( err => console.log('error: ', err))
    }, [])

    return(
        <div className="dropdown-wrapper pt-3 pb-3">
            <div className="dropdown">
                <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {basedOn.text}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {   
                        filter.map((filterApplied, index) => (
                                    <a className="dropdown-item" href={`/${filterApplied}`}>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id={filterApplied} />
                                            <label class="custom-control-label" for={filterApplied}>
                                                {filterApplied}
                                            </label>
                                        </div>
                                    </a>
                            ))
                    }
                    {/* <hr /> */}
                    {/* <button className="btn btn-apply-filter" type="button">
                        Apply Filter
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;