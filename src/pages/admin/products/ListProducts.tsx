import { Link } from "react-router-dom"
import { useFetchProductsQuery, useRemoveProductsMutation } from "../../../service/products.service"
import { toast } from "react-toastify"


const ListProducts = () => {
    const { data } = useFetchProductsQuery()
    console.log(data);

    const [removeProducts] = useRemoveProductsMutation()
    const handleDelete = (_id?: string) => {
        if (_id) {
            removeProducts(_id)
            toast.error(`Xóa sản phẩm thành công`, {
                position: "bottom-left",

            })
            useFetchProductsQuery()

        }

    }



    return <>
        <Link to="/admin/addProduct" className="btn btn-primary">Thêm mới</Link>
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map((item, index) =>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">{item.name}</p>
                                    <p className="text-muted mb-0">{item.price}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{item.description}</p>
                        </td>
                        <td>
                            <td>
                                <button className="btn btn-link btn-sm btn-rounded" onClick={() => { handleDelete(item._id) }}>Xóa</button>
                                <Link to={`/admin/product/${item._id}`}><button className="btn btn-link btn-sm btn-rounded">Sửa</button></Link>
                            </td>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}

export default ListProducts
