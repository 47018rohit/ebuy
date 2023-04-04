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

  // Adding items to cart
  const addItems = (item) => {
    const existingItem = cartArray.find((e) => e.id === item.id)

    if (existingItem) {
      setCartArray(
        cartArray.map(e =>
          e.id === item.id ? { ...e, quantity: e.quantity + 1, netPrice:e.price*(e.quantity+1) } : e
        )
      )
      showAlert('quantity increased', 'success')
    }
    else {
      const tempArray = [{
        id: item.id,
        image: item.images[0],
        title: item.title,
        price: item.price,
        quantity: 1,
        netPrice: item.price*1
      }]
      setCartArray([...tempArray, ...cartArray])
      showAlert("Added to Cart", "success")
    }
  }

  // Change Quantity
  const increaseQuantity = (item) => {
    setCartArray(
      cartArray.map(e =>
        e.id === item.id ? { ...e, quantity: e.quantity + 1, netPrice:e.price*(e.quantity+1) } : e
      )
    )
  }

  const decreaseQuantity = (item) => {
    setCartArray(
      cartArray.map(e =>
        e.id === item.id ? { ...e, quantity: e.quantity - 1,netPrice:e.price*(e.quantity-1) } : e
      )
    )
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
  const deleteItem = (id) => {
    const arrayAfterDelete = cartArray.filter((e) => e.id !== id)
    return setCartArray([...arrayAfterDelete])
  }

  return (
    <BrowserRouter basename='/ebuy'>

      <Navbar />
      <div  >
        <Routes>
          <Route path='/' element={<HomeContent />}></Route>
          <Route path='/shop' element={<ShopZone addItems={addItems} showAlert={showAlert} />}></Route>
          <Route path='/cart' element=
            {<Cart
              cartArray={cartArray}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem} />
            }
          ></Route>
        </Routes>
      </div>
      <Alert alert={alert} />
    </BrowserRouter>
  )
}

export default App;
