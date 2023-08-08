import { useForm } from 'react-hook-form'
import { useAddProductsMutation, useFetchProductsQuery } from '../../../service/products.service'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../../../interface/category'
import { toast } from "react-toastify"


type addProductsForm = {

    name: string,
    price: number,
    image: string,
    description: string,
}

const CreateProducts = () => {
    const { handleSubmit, formState: { errors }, register } = useForm<addProductsForm>()
    const { data } = useFetchProductsQuery()
    const [addProducts] = useAddProductsMutation()
    const navigate = useNavigate()
    const onSubmit = (body: addProductsForm) => {

        addProducts(body)
        navigate('/admin/home')
        toast.success(`Thêm mới sản phẩm thành công`, {
            position: "bottom-left",

        })
        useFetchProductsQuery()
    }


    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="" aria-describedby="helpId"
                {...register("name",
                    {
                        required: "Dữ liệu không được để trống",
                    })}
            />
            <div className="text-red-500">{errors.name && errors.name.message}</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" placeholder="" aria-describedby="helpId"
                {...register("price",
                    {
                        required: "Dữ liệu không được để trống",
                    })}
            />
            <div className="text-red-500">{errors.price && errors.price.message}</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="text" className="form-control" placeholder="" aria-describedby="helpId"
                {...register("image",
                    {
                        required: "Dữ liệu không được để trống",
                    })}
            />
            <div className="text-red-500">{errors.image && errors.image.message}</div>
        </div>
        <div className="">
            <label className="form-label">Desc</label>
            <textarea className="form-control" placeholder="" aria-describedby="helpId"
                {...register("description",
                    {
                        required: "Dữ liệu không được để trống",
                    })}
            />
            <div className="text-red-500">{errors.description && errors.description.message}</div>
        </div>
        {/* <select 
                {...register("category_Id")}
        >
            {data?.map((item) => {
                return (
                    <option value={item._id}>{item.name}</option>
                )
            })}
        </select> */}
        <button className="btn btn-success">Thêm mới</button>
    </form>
}

export default CreateProducts