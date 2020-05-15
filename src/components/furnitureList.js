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
                if (Object.keys(props).length === 0) {
                    setProducts(response.products);
                    setIsLoading(false);
                } else {
                    // setProducts('failed');
                    let searchApplied = response.products.filter(product => {
                        const searchTerm = props.search.toLowerCase();
                        const basedOnName = product.name.toLowerCase();
                        const basedOnDesc = product.description.toLowerCase();
                        const basedOnStyle = product.furniture_style.map(style => style.toLowerCase());

                        // console.log('base on style', basedOnStyle);

                        return basedOnName.includes(searchTerm) | basedOnDesc.includes(searchTerm) | basedOnStyle.includes(searchTerm);
                    })

                    setProducts(searchApplied);
                    setIsLoading(false);
                }
            }
        )
        .catch( err => console.log('error: ', err))
    }, [])

    return(
        <>
            { isLoading && 
                <div className="text-center">
                    <div className="spinner-border text-secondary"  style={{width: '5rem', height: '5rem', margin: '10rem 0 10rem 40rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {   
                products.map((productInfo, index) => (
                    <Card products={productInfo} key={index}/>
                ))
            }
        </>
    );
}

export default FurnitureList;