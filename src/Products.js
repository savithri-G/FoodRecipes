import React from 'react';

const Products = ({ data }) => {
    // Check if data is an array
    if (!Array.isArray(data)) {
        return null; // or render some error message
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5 d-flex flex-wrap ms-5">
                {data.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={item.recipe.image} alt={item.recipe.label} />
                            <div className="card-body d-flex flex-column">
                                <center>
                                    <h5 className="card-title">{item.recipe.label}</h5>
                                    <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
                                    <a href={item.recipe.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">View Recipe</a>
                                </center>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
