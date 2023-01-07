import React, { useEffect, useState } from 'react'
import Cards from './Cards';

export default function ShopZone(props) {


  const [product, setProduct] = useState([])
  const fetchItem = async () => {
    let rawData = await fetch(`https://api.escuelajs.co/api/v1/products/?limit=15`);
    let response = await rawData.json()
    setProduct(response)
  }

  const addItems = (id, title, price, image) => {
    props.addItems(id, title, price, image)
  }

  useEffect(() => {
    fetchItem()
  })

  return (
    <>
      <div className='container' style={{ marginTop: "10%" }}>
        <div className="row">
          {product.map((element) => {
            return <div className='col-md-4' key={element.id}>
              <Cards image={element.images[0]} title={element.title} price={element.price} id={element.id} category={element.category.name} addItems={addItems} alertMessage={props.alertMessage} />
            </div>
          })}
        </div>
      </div>

    </>
  )
}
