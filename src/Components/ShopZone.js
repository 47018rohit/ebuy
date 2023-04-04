import React, { useEffect, useState } from 'react'
// import Cards from './Cards';

export default function ShopZone(props) {

 
  const [product, setProduct] = useState([])
  const fetchItem = async () => {
    let rawData = await fetch(`https://api.escuelajs.co/api/v1/products/?limit=15`);
    let response = await rawData.json()
    setProduct(response)
  }

  // const addItems = (id, title, price, image) => {
  //   props.addItems(id, title, price, image)
  // }

  useEffect(() => {
    fetchItem()
  })

  const handleAddToCart = (item) => {
    // console.log(item)
    props.addItems(item)
  }

  return (
    <>
      <div className='container' style={{ marginTop: "10%" }}>
        <div className="row">
          {product.map((element) => {
            return <div className='col-md-4' key={element.id}>
              {/* <Cards image={ } title={ } price={ } id={element.id} category={ } addItems={addItems} alertMessage={props.alertMessage} /> */}
              <div className="card my-3" style={{ height: "30rem" }}>
                <span className='position-absolute top-0 translate-middle-x' style={{ left: '86%' }}>
                  <span className="badge bg-secondary">{element.category.name}</span>
                </span>
                <img src={element.images[0]} className="card-img-top" alt="..." style={{}} />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">₹{element.price}</p>
                  <button onClick={()=>handleAddToCart(element)} className="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

    </>
  )
}
