import { Link } from "react-router-dom"
import { useFetchProductsQuery, useRemoveProductsMutation } from "../../../service/products.service"


const ListProducts = () => {
    const { data } = useFetchProductsQuery()
    console.log(data);

    const [removeProducts] = useRemoveProductsMutation()
    const handleDelete = (_id?: string) => {
        if (_id) {
            removeProducts(_id)
            useFetchProductsQuery()
        }

    }


    return <div>
        <table className="table table-hover container">
            <Link to="/admin/addProduct" className="btn btn-info mt-3">Thêm mới</Link>
            <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>IMAGE</th>
                    <th>DESCRIPTION</th>
                    <th>ACTIVE</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map((item, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><img src={item.image} alt="Quá đẹp trai không có ảnh" width="100px" /></td>
                        <td>{item.description}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => { handleDelete(item._id) }}>Xóa</button>
                            <Link to="" className="btn btn-danger mx-2">Sửa</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default ListProducts
