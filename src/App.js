import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './Components/Alert';
import Cart from './Components/Cart';
import HomeContent from './Components/HomeContent';
import Navbar from './Components/Navbar';
import ShopZone from './Components/ShopZone';


function App() {

  const [cartArray, setCartArray] = useState([])
  const [alert, setAlert] = useState(null)
  const [grandTotal, setGrandTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  // Adding items to cart
  const addItems = (item) => {
    const existingItem = cartArray.find((e) => e.id === item.id)

    if (existingItem) {
      setCartArray(
        cartArray.map(e =>
          e.id === item.id ? { ...e, quantity: e.quantity + 1, netPrice: e.price * (e.quantity + 1) } : e
        )
      )
      showAlert('Added to Cart', 'success')
      setGrandTotal(grandTotal + item.price)
      setTotalItems(totalItems + 1)

    }
    else {
      const tempArray = [{
        id: item.id,
        image: item.images[0],
        title: item.title,
        price: item.price,
        quantity: 1,
        netPrice: item.price * 1
      }]
      setCartArray([...tempArray, ...cartArray])
      showAlert("Added to Cart", "success")
      setGrandTotal(grandTotal + item.price)
      setTotalItems(totalItems + 1)

    }
  }

  // Change Quantity
  const increaseQuantity = (item) => {
    setCartArray(
      cartArray.map(e =>
        e.id === item.id ? { ...e, quantity: e.quantity + 1, netPrice: e.price * (e.quantity + 1) } : e
      )
    )
    setGrandTotal(grandTotal + item.price)
    setTotalItems(totalItems + 1)
  }

  const decreaseQuantity = (item) => {
    setCartArray(
      cartArray.map(e =>
        e.id === item.id ? { ...e, quantity: e.quantity - 1, netPrice: e.price * (e.quantity - 1) } : e
      )
    )
    setGrandTotal(grandTotal - item.price)
    setTotalItems(totalItems - 1)
  }

  // Alert Message
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  // removing item from cart
  const deleteItem = (item) => {
    const arrayAfterDelete = cartArray.filter((e) => e.id !== item.id)
    setGrandTotal(grandTotal - item.netPrice)
    setTotalItems(totalItems - item.quantity)
    return setCartArray([...arrayAfterDelete])

  }

  return (
    <BrowserRouter basename='/ebuy'>

      <Navbar />
      <div  >
        <Routes>
          <Route path='/' element={<HomeContent />}></Route>
          <Route path='/shop' element=
            {<ShopZone
              addItems={addItems}
              showAlert={showAlert}
              cartArray={cartArray}
              totalItems={totalItems}
            />}></Route>
          <Route path='/cart' element=
            {<Cart
              cartArray={cartArray}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
              grandTotal={grandTotal} />
            }
          ></Route>
        </Routes>
      </div>
      <Alert alert={alert} />
    </BrowserRouter>
  )
}

export default App;
