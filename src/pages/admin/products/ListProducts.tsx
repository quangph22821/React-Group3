import { Link } from "react-router-dom"


const ListProducts = () => {
    return <div>
        <table className="table table-hover container">
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
                <tr>
                    <td>1</td>
                    <td>Quý đẹp trai</td>
                    <td>Giá trị vô hạn</td>
                    <td><img src="" alt="Quá đẹp trai không có ảnh" /></td>
                    <td>Đep trai quá</td>
                    <td>
                        <button className="btn btn-warning">Xóa</button>
                        <Link to="" className="btn btn-danger mx-2">Sửa</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default ListProducts
