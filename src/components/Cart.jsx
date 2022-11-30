import productList from '../data/productList.json';
import {useDispatch, useSelector} from 'react-redux';
import cartSlice from '../redux/actions';

import '../styles/cart.scss'

const Cart = () => {

  const {cartProductsIds} = useSelector((state) => state.cart);
  console.log(cartProductsIds);

  const cartProductsData = productList.products.filter( (product) => cartProductsIds.includes(product.id));


  const dispatch = useDispatch();
  const {removeFromCart} = cartSlice.actions;

  return (
    <div className="cart">
       {cartProductsData.length > 0 && <div className="cart-product">
        <h3 className="header">Items in cart</h3>
        {cartProductsData.map((product) => (
          <div key={product.id} className="row">
            <img className="item-image" src={product.imageUrl} alt="product" />

            <div className="item-info">
              <h4>{product.name}</h4>
              <p className="text-truncate">{product.detail}</p>
              <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                <i className="bi bi-trash-fill" /> Remove Item
              </button>
            </div>
          </div>
        ))}

        <footer className="text-center">
          <button className="btn btn-primary">CHECKOUT</button>
        </footer>
      </div>}

      {cartProductsData.length === 0 && <div className="text-center empty-cart">
        <i className="bi bi-cart3" />
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>}
    </div>
  )
}

export default Cart
