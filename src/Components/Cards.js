import React from 'react'

export default function Cards(props) {
    let { image, title, price, id, category } = props

    const handleAddToCart = () => {
        props.addItems(id, title, price, image)
    }

    return (
        <div>
            <div className="card my-3" style={{ height: "30rem" }}>
                <span className='position-absolute top-0 translate-middle-x' style={{ left: '86%' }}>
                    <span className="badge bg-secondary">{category}</span>
                </span>
                <img src={image} className="card-img-top" alt="..." style={{}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                    <button onClick={handleAddToCart} className="btn btn-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
