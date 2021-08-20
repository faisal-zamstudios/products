
import ShowCartProducts from './showCartProducts';

function CartProducts(props) {
    let cartNum = 0;
    
    return (
        <>
            <h1 className="w-100">Cart Items</h1>
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
                    props.carts?(<>{props.carts.map((cart) => {
                        cartNum++;
                        return <ShowCartProducts cartNum={cartNum} pid={cart.id} pquantity={cart.quantity} />
                    })}</>):null
                }
                </tbody>
            </table>
        </>
    );
}

export default CartProducts;
