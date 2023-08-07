import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { useDetailCategoryQuery, useUpdateCategoryMutation } from '../../../service/category.service'
import { getByIdProduct } from '../../../api/products'
import { getByIdCategory } from '../../../api/category'

type updateFormCategory = {
    _id: string
    name: string,
    image: string
}

const UpdateCategory = () => {
    const _id = useParams().id
    const navigate = useNavigate()
    const { data } = useDetailCategoryQuery(_id)
    const [editCategory] = useUpdateCategoryMutation()
    console.log(data);

    const { register, handleSubmit, formState: { errors } } = useForm<updateFormCategory>({
        defaultValues: async () => {
            if (_id) {
                return await fetCategoryById(_id)
            }
        },
    })

    const fetCategoryById = async (id: string) => {
        const { data } = await getByIdCategory(id)
        return data
    }

    const onSubmit = async (data: updateFormCategory, _id: string) => {
        try {
            if (_id) {
                const response = await editCategory(data)
                navigate('/admin/category')
            }
        } catch (error) {

        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="" aria-describedby="helpId"
                {...register("name")}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="text" className="form-control" placeholder="" aria-describedby="helpId"
                {...register("image")}
            />
        </div>
        <button className="btn btn-success">Cập nhật</button>
    </form>
}

export default UpdateCategory