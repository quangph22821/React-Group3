import { useForm } from 'react-hook-form'
import { useFetchProductsQuery, useUpdateProductMutation } from '../../../service/products.service'
import { useNavigate, useParams } from 'react-router-dom'
import { ICategory } from '../../../interface/category'
import { useUpdateCategoryMutation } from '../../../service/category.service'
import { getByIdProduct } from '../../../api/products'
import { toast } from "react-toastify"


type updateFormProducts = {
    _id: string
    name: string,
    price: number,
    image: string,
    description: string,
}

const UpdateProduct = () => {
    const _id = useParams().id
    const navigate = useNavigate()
    const [editProduct] = useUpdateProductMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<updateFormProducts>({
        defaultValues: async () => {
            if (_id) {
                return await fetProductById(_id)
            }
        },
    })

    const fetProductById = async (id: string) => {
        const { data } = await getByIdProduct(id)
        return data
    }

    const onSubmit = async (data: updateFormProducts, _id: string) => {
        try {
            if (_id) {
                const response = await editProduct(data)
                navigate('/admin/home')
                toast.info(`Sửa sản phẩm thành công`, {
                    position: "bottom-left",

                })
            }
        } catch (error) {

        }
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

export default UpdateProduct