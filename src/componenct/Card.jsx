import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
    
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)} >
                                <h3>{item.id}</h3>
                                <h3>{item.name}</h3>
                                <img src={item.sprites.front_default} alt="" />
                               
                            </div>
                            
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;