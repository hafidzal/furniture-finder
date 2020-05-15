import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Card from './common/card';

const FurnitureList = (props) => {
    const url = `http://www.mocky.io/v2/5c9105cb330000112b649af8`;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                setProducts(response.products);
                setIsLoading(false);
            }
        )
        .catch( err => console.log('error: ', err))
    }, [])

    return(
        <>
            {/* { isLoading && 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            } */}
            {   
                products.map((productInfo, index) => (
                    <Card products={productInfo}/>
                ))
            }
        </>
    );
}

export default FurnitureList;