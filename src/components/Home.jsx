
import {cartSlice, fetchAllProducts} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';

import '../styles/home.scss';

const Home = () => {
  const {cart, products} = useSelector((state) => state);
  const {fetchStatus, data} = products;

  const {addToCart, removeFromCart} = cartSlice.actions;

  const dispatch = useDispatch()

  function isAddedToCart(id) {
    return cart.cartProductsIds.includes(id)
  }

  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchAllProducts('http://localhost:3000/products'))
    }
    
  }, [dispatch,fetchStatus])
  
  
  console.log('Products api fetch ' + fetchStatus)
  return (
    <div className="container product-catalogue">
      <div className="row">
        {data?.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!isAddedToCart(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}
                  {isAddedToCart(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
