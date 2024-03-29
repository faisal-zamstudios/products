import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/actions/rootAction';


function Add(props) {

    let { product, setProduct } = props;

    let dispatch = useDispatch();

    return (
        <>
            <h1 className="w-100">Add Product</h1>
            <br />
            <label>Product Name: </label>
            <input type="text" className="form-control" value={ product.name } onChange={(e) => setProduct({id: product.id, name: e.target.value, price: product.price, addbtn: product.addbtn, updatebtn: product.updatebtn}) } />
            <br />
            <label>Product Price: </label>
            <input type="number" className="form-control" value={ product.price } onChange={(e) => setProduct({id: product.id, name: product.name, price: e.target.value, addbtn: product.addbtn, updatebtn: product.updatebtn}) } />
            <br />
            <button className="btn btn-primary" style={{ "display": product.addbtn }} onClick={ 
                () => {
                    dispatch(addProduct({name: product.name, price: product.price }));
                    setProduct({id: '', name: '', price: '', addbtn: 'block', updatebtn: 'none'});
                }
            }>Add a new Product</button>
            <button className="btn btn-primary" style={{ "display": product.updatebtn }} onClick={ 
                () => {
                    dispatch(updateProduct({id: product.id, name: product.name, price: product.price }));
                    setProduct({id: '', name: '', price: '', addbtn: 'block', updatebtn: 'none'});
                }
            }>Update Product</button>
            <br />
            <br />
        </>
    );
}

export default Add;
