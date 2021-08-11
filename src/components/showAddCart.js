
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/rootAction';

function ShowAddCart(props) {

    const { pid, pname, pprice } = props;

    const [pquantity, setPquantity] = useState(0);

    let dispatch = useDispatch();

    return (
        <tr>
            <td>{pid}</td>
            <td>{pname}</td>
            <td>{pprice}</td>
            <td>
                <button className="btn btn-secondary mr-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => { 
                    if(pquantity>0) {
                        setPquantity(pquantity - 1);
                    }
                }} >−</button>
                {pquantity}
                <button className="btn btn-danger ml-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => setPquantity(pquantity + 1) } >+</button>
            </td>
            <td>
                <button className="btn btn-primary" style={{'height': '25px', 'font-size': '12px', 'padding': '.15rem .75rem'}} onClick={ () => {
                    dispatch(addCart({id: pid, name: pname, price: pprice, quantity: pquantity }));
                }} >Add to Cart</button>
            </td>
        </tr>
    );
}

export default ShowAddCart;
