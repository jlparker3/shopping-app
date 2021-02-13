

function Product({ id,img,name,cost,calories, toggleFavorites, isFavorite }) {
    
    //if isFavorite is true, display favorite! on card, else display nothing
    const favorite = isFavorite ? <p>Favorite!</p> : null
    //if isFavorite is true, button text says "remove" else, "add"
    const favButtonText = isFavorite ? "Remove from Favorites" : "Add to Favorites"
    
    return (
        <div className= "card">
            <img src={img} width="200px" />
            <h3>{name}</h3>
            <h2>Cost: {cost}</h2>
            <h2> Calories: {calories}</h2>

            <button onClick={() => toggleFavorites(id)}>{favButtonText}</button>
            {favorite}


            <hr></hr>
        </div>
    )
}

export default Product;