import { Outlet } from "react-router-dom"

const LayoutAdmin = () => {
    return <>
        <div className="d-flex p-2">
            <div>
                <h1 className="">Đây là slider</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    </>


}

export default LayoutAdmin
