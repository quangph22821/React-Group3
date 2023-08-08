import { Link, Outlet } from "react-router-dom"

const LayoutAdmin = () => {
    return <>
        <div className="d-flex">
            <div className="p-2 flex-shrink-1">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/home">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/category">
                            Category
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/cart">
                            Cart
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/user">
                            User
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="p-2 w-100">
                <Outlet />
            </div>
        </div>
    </>


}

export default LayoutAdmin
