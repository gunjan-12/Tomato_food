import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>delvery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='enter your first name' ></input>
          <input type="text" placeholder='enter your Last name' ></input>
        </div>
        <input type="email" placeholder='enter your Email' ></input>
        <input type="text" placeholder='Street' ></input>
        <div className="multi-fields">
        <input type="text" placeholder='Zip Code' ></input>
        <input type="text" placeholder='country' ></input>
        </div>
        <input type="text" placeholder='Phone Number' ></input>




      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
          <div  className='cart-total-details'>
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div  className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div  className='cart-total-details'>
            <p>Total</p>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button  >PROCEED TO Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
