
import { useSelector } from 'react-redux';
import ShowAddCart from './showAddCart';
import CartProducts from './cartProducts';
import { useState } from 'react';

function AddCart() {

    let products = useSelector((state) => state.products);
    let carts = useSelector((state) => state.carts);
    const [updater, setUpdater] = useState(false);
    let prodNum = 0;

    return (
        <div className="row m-0">
            <div className="col-lg-6">
                <h1 className="w-100">Buy Products</h1>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products&&
                        products.map((product) => {
                            prodNum++;
                            return <ShowAddCart pid={product.id} prodNum={prodNum} pname={product.name} pprice={product.price} updater={updater} setUpdater={setUpdater} />
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="col-lg-6">
                <CartProducts carts={carts} />
            </div>
        </div>
    );
}

export default AddCart;
