import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart(props) {
  const [grandTotal, setGrandTotal] = useState()

  const calculateTotal = () => {
    let sum = 0
    if (props.cartArray.length !== 0) {
      props.cartArray.forEach((e) => {
        return console.log(sum + e.netPrice)
      })
      setGrandTotal(    sum  )

    } else {
      setGrandTotal(0)
    }
  }

  const handleDelete = (id) => {
    props.deleteItem(id)
    calculateTotal()
  }

  const decreaseQuantity = (item) => {
    // console.log(item)
    props.decreaseQuantity(item);
    calculateTotal()
  }
  const increaseQuantity = (item) => {
    props.increaseQuantity(item);
    calculateTotal()
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
          {props.cartArray.length === 0 ?
            <>
              <h2 className='pb-5' >Nothing in the Cart</h2>
            </>
            : props.cartArray.map((element) => {
              return <div className="row py-3" key={element.id}>
                <div className="col">
                  <img src={element.image} className="card-img-top" alt="..." style={{ height: '5rem', width: '6rem' }} />
                </div>
                <div className="col">{element.title}</div>
                <div className="col quantity">
                  <button className="btn btn-outline-secondary" disabled={element.quantity <= 1} onClick={() => decreaseQuantity(element)}>-</button>

                  <strong style={{ padding: '1rem', fontSize: '18px' }} > {element.quantity} </strong>

                  <button className="btn btn-outline-secondary" onClick={() => increaseQuantity(element)}>+</button>
                </div>
                <div className="col">₹{element.price}x{element.quantity}= {element.netPrice}</div>
                <div className="col">
                  <button onClick={() => { handleDelete(element.id) }} className="btn btn-dark" >Delete</button>
                </div>
              </div>
            })}
        </div>
        <div className="total-price bg-dark text-light my-2 sticky-bottom" style={{ width: '100%', height: '10%' }}>
          <div className="row py-2">
            <div className="col fw-bolder fs-4">
              <button className='btn btn-light text-dark'>
                <Link className='shopNow' to='/shop'>Continue Shopping</Link>
              </button>
            </div>
            <div className="col fw-bolder fs-4">Grand Total</div>
            <div className="col fw-bolder fs-4">₹{grandTotal}</div>
            <div className="col fw-bolder fs-4">
              <button className="btn btn-light text-dark" disabled={props.cartArray.length === 0} >Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
