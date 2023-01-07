import React, { useState } from 'react'

export default function Cart(props) {
  const [quantity, setQuantity] = useState(1)
  const handleDelete = (id) => {
    props.deleteItem(id)
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }

  return (
    <>
      <div className='container text-center'>
        <div className="row py-5 rounded">
          <div className="col py-2 bg-dark text-light">   </div>
          <div className="col py-2 fw-bold bg-dark text-light">Product Name</div>
          <div className="col py-2 fw-bold bg-dark text-light">Quantity</div>
          <div className="col py-2 fw-bold bg-dark text-light">Price</div>
          <div className="col py-2 bg-dark text-light">  </div>
        </div>
        <div className='col'>
          {props.cartArray.map((element) => {
            return <div className="row py-3" key={element.id}>
              <div className="col">
                <img src={element.image} className="card-img-top" alt="..." style={{ height: '5rem', width: '6rem' }} />
              </div>
              <div className="col">{element.title}</div>
              <div className="col">
                <select className="form-select text-center" onChange={handleQuantity} aria-label="select">
                  <option value='1'>{element.quantity}</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="col">${element.price * quantity}</div>
              <div className="col">
                <button onClick={() => { handleDelete(element.id) }} className="btn btn-dark" >Delete</button>
              </div>
            </div>
          })}
        </div>
        <div className="total-price bg-dark text-light my-2 sticky-bottom" style={{ width: '100%', height: '10%' }}>
          <div className="row py-2">
            <div className="col fw-bolder fs-4">Grand Total</div>
            <div className="col fw-bolder fs-4">${ }</div>
          </div>
        </div>
      </div>
    </>
  )
}
