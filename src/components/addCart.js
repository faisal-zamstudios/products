
import { useSelector } from 'react-redux';
import ShowAddCart from './showAddCart';

function AddCart(props) {

    let products = useSelector((state) => state.products);

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
                    products&&
                    products.map((product) => {
                        return <ShowAddCart pid={product.id} pname={product.name} pprice={product.price} />
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default AddCart;
