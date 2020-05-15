import React, { useState } from 'react';

const Card = ({products}) => {
    return(
        <div className="mt-4 mb-4">
            <div className="furniture-container">
                <div className="card card-product-styles" style={{width: '25rem'}}>
                    <div className="card-body card-title-styles">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className="card-title card-product-name">{products.name}</h5>
                                </div>
                                <div className="col-sm">
                                    <p className="card-title card-price">Rp. {products.price}</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderBottom: 'solid #ac3b61 1px' }}/>
                            <p className="card-text">{products.description}</p>
                        <hr style={{ borderBottom: 'solid #ac3b61 1px' }}/>
                            
                            {   
                                products.furniture_style.map((style, index) => (
                                    <p className="card-text card-furniture-style" key={index}>{style} </p>
                                ))
                            }
                            <p className="card-text text-right">{products.delivery_time} days</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;