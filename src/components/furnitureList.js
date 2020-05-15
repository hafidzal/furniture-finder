import React, { useState, useEffect } from 'react';
import moment from 'moment';

const FurnitureList = (props) => {
    // const url = `https://api.github.com/users/${props.userName}/repos`;
    // const [projectList, setProjectList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch(
    //         url, {
    //             method: "GET"
    //         }
    //     )
    //     .then(
    //         res => res.json()
    //     )
    //     .then(
    //         response => {
    //             setProjectList(response);
    //             setIsLoading(false);
    //         }
    //     )
    //     .catch( err => console.log('error: ', err))
    // }, [])

    // const clickProject = (id) => {
    //     // console.log('clicked: ', index);
    //     props.history.push({
    //         pathname:`/${props.userName}/${id.name}`,
    //         state: { detail: id }
    //     });
    // }

    return(
        <>
            {/* { isLoading && 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            } */}
            <ul className="list-group list-style">
                <li>Barang 1</li>
                <li>Barang 2</li>
            {/* {
                projectList.map((project, index) => (
                    <li key={index} 
                        onClick={() => clickProject(project)}
                        className="list-group-item mt-3 repolist-style">
                            <h5 className="mt-2">{project.name}</h5>
                            <p className="created-at-style">Created at : {moment(project.created_at).format('MMMM Do YYYY')}</p>
                    </li>
                ))
            } */}
            </ul>
        </>
    );
}

export default FurnitureList;