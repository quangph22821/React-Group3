
import { Link } from "react-router-dom"
import { useFetchCategoryQuery, useRemoveCategoryMutation } from "../../../service/category.service"
import { toast } from "react-toastify"


const ListCategory = () => {
    const { data } = useFetchCategoryQuery()
    const [removeCategory] = useRemoveCategoryMutation()
    const handleDelete = (_id?: string) => {
        if (_id) {
            removeCategory(_id);
            toast.error(`Xóa sản phẩm thành công`, {
                position: "bottom-left",

            })
            useFetchCategoryQuery();
        }

    }



    return <>
     <Link to="/admin/addcategory" className="btn btn-primary">Thêm mới</Link>
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
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
                            </div>
                        </td>
                        <td>
                            <p className="fw-bold mb-1">{item.name}</p>
                        </td>
                        <td>
                            <td>
                                <button className="btn btn-link btn-sm btn-rounded" onClick={() => { handleDelete(item._id) }}>Xóa</button>
                                <Link to={`/admin/editCate/${item._id}`}><button className="btn btn-link btn-sm btn-rounded">Sửa</button></Link>
                            </td>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}

export default ListCategory
