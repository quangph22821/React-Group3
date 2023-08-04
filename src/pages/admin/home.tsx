import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchCate } from "../shoes/category.reducer"
import { fetchShoes } from "../shoes/shoes.reducer"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { MessageContext } from "../../context/message-context"


const AdminHome = () => {
    const { shoess, isLoading } = useSelector((state: RootState) => state.shoess)
    const { category } = useSelector((state: RootState) => state.category)
    const dispatch = useDispatch<AppDispatch>()
    const { setMessage } = useContext(MessageContext)
    useEffect(() => {
        const getShoes = async () => {
            try {
                await dispatch(fetchShoes()).unwrap()

            } catch (error) {
                setMessage({
                    type: 'error',
                    message: error
                })
                console.log(error);

            }
        }
        const getAllCategory = async () => {
            try {
                await dispatch(fetchCate()).unwrap()

            } catch (error) {
                setMessage({
                    type: 'error',
                    message: error
                })
                console.log(error);

            }
        }
        getShoes(),
        getAllCategory()
    }, [])

    return <>


        <main className='flex'>
            <section className='flex-initial w-[300px] h-[1000px] mt-[50px]'>
                <Link to="/admin/home"><h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-house"></i>Giày thể thao</h2></Link>
                <Link to="/admin/category"><h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-bars"></i>Danh mục</h2></Link>
                <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-tablet"></i>Người dùng</h2>
            </section>
            <section className='flex-initial w-full px-[10px] bg-slate-50  '>
                {/* <form action="" className="  flex items-center gap-4 py-2 px-10">
                    <input className="w-[600px] h-[30px] rounded-lg " type="text" placeholder="search" />
                    <button type="submit" onClick={handleSubmit(onChange)}>
                        Search
                    </button>
                </form> */}
                <h1 className='text-3xl mt-[10px] font-bold'>Giày thể thao</h1>
                <Link to="/admin/product">
                    <button className="mt-[10px] border px-2 py-2 bg-blue-500 boder rounded-lg">Thêm sản phẩm</button>
                </Link>
                <div className='mt-[20px]'>

                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                            <thead>
                                <tr>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Tên sản phẩm
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Giá
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Mô tả
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Hình ảnh
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Thao tác
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {shoess.map(shoes => (


                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {shoes.name}

                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{shoes.price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{shoes.description}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <img className="w-[30%]" src={shoes.image} alt="" />
                                        </td>
                                        <td className="text-center ">
                                            {/* <button className="bg-sky-600 text-white rounded-md p-2 btn-remove" onClick={() => checkDelete(shoes._id)}><i className="fa-sharp fa-solid fa-trash"></i></button> */}

                                            <Link to={`/admin/product/${shoes._id}`}>
                                                <button className="bg-yellow-500 text-white rounded-md p-2 ml-[6px]"><i className="fa-solid fa-wrench"></i></button>
                                            </Link>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </main>
    </>
}

export default AdminHome