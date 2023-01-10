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

  const addItems = (id, title, price, image) => {
    if (cartArray.find((e) => e.id === id)) {
      showAlert("Already added same product, if you wish you can change the quantity in cart.", "info")
    }

    // adding item in cart
    else {
      showAlert("Added to Cart", "success")
      const tempArray = [{
        id: id,
        image: image,
        title: title,
        price: price,
        quantity: 1
      }]
      setCartArray([...tempArray, ...cartArray])
    }
  }

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
    <BrowserRouter>

      <Navbar />
      <div  >
        <Routes>
          <Route path='/' element={<HomeContent />}></Route>
          <Route path='/shop' element={<ShopZone addItems={addItems} showAlert={showAlert} />}></Route>
          <Route path='/cart' element={<Cart cartArray={cartArray} price={cartArray.price} deleteItem={deleteItem} />}></Route>
        </Routes>
      </div>
      <Alert alert={alert} />
    </BrowserRouter>
  )
}

export default App;
