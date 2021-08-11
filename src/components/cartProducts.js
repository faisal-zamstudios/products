
import { useSelector } from 'react-redux';
import ShowCartProducts from './showCartProducts';

function CartProducts() {

    let carts = useSelector((state) => state.carts);

    return (
        <div className="row m-0">
            <h1 className="w-100">Buy Products</h1>
            <br /><br /><br />
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
                    carts&&
                    carts.map((cart) => {
                        return <ShowCartProducts pid={cart.id} pname={cart.name} pprice={cart.price} pquantity={cart.quantity} />
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default CartProducts;
