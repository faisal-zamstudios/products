
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/actions/rootAction';

function Show(props) {

    const { pid, pname, pprice, myData } = props;

    let dispatch = useDispatch();

    return (
        <tr>
            <td>{pid}</td>
            <td>{pname}</td>
            <td>{pprice}</td>
            <td>
                <button className="btn btn-primary" style={{'height': '25px', 'font-size': '12px', 'padding': '.15rem .75rem'}} onClick={ () => myData({ id: pid, name: pname, price: pprice, addbtn: 'none', updatebtn: 'block' }) }>Update</button>
                {" / "}
                <button className="btn btn-danger" style={{'height': '25px', 'font-size': '12px', 'padding': '.15rem .75rem'}} onClick={() => {
                    dispatch(removeProduct(pid));
                }}>Delete</button>
            </td>
        </tr>
    );
}

export default Show;
