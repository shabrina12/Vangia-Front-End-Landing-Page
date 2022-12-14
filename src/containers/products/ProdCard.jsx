import React from 'react'

const ProdCard = ({prodMenu}) => {
    return (
        prodMenu.slice(0, 8).map(prod => {
            return (
                <div className='product-card' key={prod.id}>
                    <div className='product-card-img'>
                        <img src={prod.img} alt='product' />
                    </div>
                    <h3>{prod.name}</h3>
                    <p>{prod.desc}</p>
                    <h4>${prod.price}</h4>
                    <button type='button'>Add to Cart</button>
                </div>
            )
        })
    )
}

export default ProdCard