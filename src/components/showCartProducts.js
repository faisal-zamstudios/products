
import { useDispatch } from 'react-redux';
import { updateCart, removeCart } from '../redux/actions/rootAction';

function ShowCartProducts(props) {

    let { pid, pname, pprice, pquantity } = props;

    let dispatch = useDispatch();

    return (
        <tr>
            <td>{pid}</td>
            <td>{pname}</td>
            <td>{pprice}</td>
            <td>
                <button className="btn btn-secondary mr-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => { 
                    if(pquantity>0) {
                        pquantity -= 1;
                        dispatch(updateCart({id: pid, name: pname, price: pprice, quantity: pquantity }));
                    }
                }} >−</button>
                {pquantity}
                <button className="btn btn-danger ml-2" style={{'height': '25px', 'font-size': '16px', 'padding': '0rem .5rem', 'font-weight': '700'}} onClick={ () => {
                    pquantity += 1;
                    dispatch(updateCart({id: pid, name: pname, price: pprice, quantity: pquantity }));
                } } >+</button>
            </td>
            <td>
                <button className="btn btn-primary" style={{'height': '25px', 'font-size': '12px', 'padding': '.15rem .75rem'}} onClick={ () => {
                    dispatch(removeCart(pid));
                }} >Delete</button>
            </td>
        </tr>
    );
}

export default ShowCartProducts;
