
import { useSelector } from 'react-redux';
import Show from './showProducts';

function Products(props) {

    const { myData } = props;

    let products = useSelector((state) => state);

    return (
        <div className="row m-0">
            <h1 className="w-100">Update / Delete Product</h1>
            <br /><br /><br />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => {
                        return <Show pid={product.id} pname={product.name} pprice={product.price} myData={myData} />
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default Products;
