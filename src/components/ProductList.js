import { productData } from "../data/shoppingData";

import Product from "./Product";
import React, { useState } from "react";




function ProductList({ products }) {
    const [favorites, setFavorites] = useState([])



    function toggleFavorites(id) {
        //if the id is not in the favorites array, add it
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id])
        } else {
            //if the id is in the favorites array, 
            //keep all the ids that are NOT the id you selected
            const updatedFaves = favorites.filter(fav => fav !== id)
            setFavorites(updatedFaves)
        }
    }

    //seeing if the id of the product is in the favorites array
    function isFavorite(id) {
        return(
            favorites.includes(id) ? true : false
        ) 
    }

    const allProducts = products.map(product => {

        return (

            <Product
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                cost={product.cost}
                calories={product.calories}
                toggleFavorites={toggleFavorites}
                isFavorite={isFavorite(product.id)}

            />


        )

    })

    return (
        <div>{allProducts} </div>
    )
}


export default ProductList;