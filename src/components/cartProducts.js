import react,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import ShowCartProducts from './showCartProducts';

function CartProducts() {

    let carts = useSelector((state) => state.carts);
    
    console.log(carts[0].quantity)
   useEffect(() => {
       
       return () => {
           
       }
   }, [carts])

    return (
        <div className="row m-0">
            <h1 className="w-100">Cart Items</h1>
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
                    carts?(<>{carts.map((cart) => {
                        return <ShowCartProducts pid={cart.id} pquantity={cart.quantity} />
                    })}</>):null
                    
                }
                </tbody>
            </table>
        </div>
    );
}

export default CartProducts;
