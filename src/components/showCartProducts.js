
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateCart, removeCart } from '../redux/actions/rootAction';

function ShowCartProducts(props) {

    let products = useSelector((state) => state.products);
    let index = products.findIndex(product => product.id === props.pid);

    const [quantity, setQuantity] = useState(props.pquantity);
    
    useEffect(() => {
        setQuantity(props.pquantity);
    }, [props.pquantity]);

    let dispatch = useDispatch();

    return (
        <tr>
            <td>{props.cartNum}</td>
            <td>{products[index].name}</td>
            <td>{products[index].price}</td>
            <td>
                <button className="btn btn-secondary mr-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => { 
                    if(quantity>0) {
                        dispatch(updateCart({id: props.pid, quantity: quantity - 1 }));
                        setQuantity(quantity - 1);
                    }
                }} >−</button>
                {quantity}
                <button className="btn btn-danger ml-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => {
                    dispatch(updateCart({id: props.pid, quantity: quantity + 1 }));
                    setQuantity(quantity + 1);
                } } >+</button>
            </td>
            <td>
                <button className="btn btn-danger" style={{'height': '25px', 'font-size': '12px', 'padding': '.15rem .75rem'}} onClick={ () => {
                    dispatch(removeCart(props.pid));
                }} >Delete</button>
            </td>
        </tr>
    );
}

export default ShowCartProducts;
