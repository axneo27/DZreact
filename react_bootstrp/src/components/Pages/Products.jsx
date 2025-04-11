import React from 'react'
import {createStore} from 'redux'
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const initialState = {
  productList: []
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('productList', serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('productList');
    if (serializedState === null) {
      return undefined;
    }
    console.log(serializedState);
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return undefined;
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productList: [...state.productList, action.payload]
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        productList: state.productList.filter(product => product.id !== action.payload)
      };
    case 'CLEAR_PRODUCT_LIST':
      return {
        ...state,
        productList: []
      };
    case 'SET_INITIAL_STATE':
      return {
        ...state,
        productList: action.payload.productList
      }
    default:
      return state;
  }
}
const store = createStore(productReducer);

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: productName, price: productPrice, quantity: productQuantity };
    store.dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    setProductName('');
    setProductPrice('');
    setProductQuantity('');

    console.log(store.getState());
    saveStateToLocalStorage(store.getState());
  };

  return (
    <div>
      <div style={{padding: '20px'}}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Product Price"
        />
        <input
          type="number"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          placeholder="Product Quantity"
        />
      </div>
      <div style={{marginLeft: '20px'}}>
        <button onClick={addProduct}>Add product</button> <ClearProductsListButton />
      </div>
    </div>
  );
};

const ClearProductsListButton = () => {
  const clearProductList = () => {
    store.dispatch({ type: 'CLEAR_PRODUCT_LIST' });
    saveStateToLocalStorage(store.getState());
  };

  return (
    <button onClick={clearProductList}>Clear product list</button>
  );
}

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadedState = loadStateFromLocalStorage();
    if (loadedState) {
      store.dispatch({ type: 'SET_INITIAL_STATE', payload: loadedState });
      setProductList(loadedState.productList);
      console.log(store.getState());
    }

    const unsubscribe = store.subscribe(() => {
      setProductList(store.getState().productList);
      
      localStorage.setItem('productList', JSON.stringify(store.getState().productList));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Card style={{ width: '200px' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.price} $</Card.Subtitle>
                <Card.Text>
                  {product.quantity} items
                </Card.Text>

                <Button variant='danger' onClick={() => {
                  store.dispatch({ type: 'REMOVE_PRODUCT', payload: product.id });
                  saveStateToLocalStorage(store.getState());
                }}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Products = () => {

  return (
    <div style={{  
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      }}>
      <h1>Products</h1>
      <AddProduct />
      <ProductList />
    </div>
  )
}

export default Products;
