
import { useSelector } from 'react-redux';
import Show from './showProducts';

function Products(props) {

    const { myData } = props;

    let products = useSelector((state) => state.products);

    let prodNum = 0;

    return (
        <>
            <h1 className="w-100">Update / Delete Product</h1>
            <br />
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
                    products&&
                    products.map((product) => {
                        prodNum++;
                        return <Show pid={product.id} prodNum={prodNum} pname={product.name} pprice={product.price} myData={myData} />
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default Products;
