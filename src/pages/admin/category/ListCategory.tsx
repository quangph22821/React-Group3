
import { Link } from "react-router-dom"
import { useFetchCategoryQuery, useRemoveCategoryMutation } from "../../../service/category.service"


const ListCategory = () => {
    const { data } = useFetchCategoryQuery()
    const [removeCategory] =useRemoveCategoryMutation()
    const handleDelete = (_id?:string) =>{
        if(_id){
            removeCategory(_id);
            useFetchCategoryQuery();
        }
        
    }



    return <div>
        <table className="table table-hover container">
            <Link to="/admin/addCategory">Thêm mới Category</Link>
            <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>IMAGE</th>
                    <th>ACTIVE</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map( (item, index) => 
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image} alt="Quá đẹp trai không có ảnh" width="100px" /></td>
                        <td>
                            <button className="btn btn-warning" onClick={() =>{handleDelete(item._id)}}>Xóa</button>
                            <Link to="" className="btn btn-danger mx-2">Sửa</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default ListCategory
