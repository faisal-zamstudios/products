
import { useState } from 'react';
import Add from './components/addProduct';
import Products from './components/products';
import AddCart from './components/addCart';
import CartProducts from './components/cartProducts';

function App() {

  const [product, setProduct] = useState({id: '', name: '', price: '', addbtn: 'block', updatebtn: 'none'});

  const myData = (data) => {
    setProduct(data);
  }

  return (
    <>
      <div className="row m-0">
        <div className="col-lg-6">
          <Add product={product} setProduct={setProduct} />
        </div>
        <div className="col-lg-6">
          <Products myData={myData} />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-lg-6">
          <AddCart product={product} setProduct={setProduct} />
        </div>
        <div className="col-lg-6">
          <CartProducts myData={myData} />
        </div>
      </div>
    </>
  );
}

export default App;
