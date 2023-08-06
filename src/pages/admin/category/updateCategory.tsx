import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { useParams, useNavigate } from 'react-router-dom'
import { useUpdateCategoryMutation } from '../../../service/category.service'
import { updateCategorySchema, updateFormCategory } from '../../../interface/category'

const UpdateCategory = () => {
    const _id = useParams().id
    const [editCategory] = useUpdateCategoryMutation()
    

    const { register, handleSubmit, formState: { errors } } = useForm<updateFormCategory>()

    const onSubmit = async (data: updateFormCategory) => {
        try {
            if (_id) {
                const response = await update(id, data)
                navigate('/admin')
            }

        } catch (error) {

        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"  className="form-control" placeholder="" aria-describedby="helpId"
            {...register("name")}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="text"  className="form-control" placeholder="" aria-describedby="helpId" 
            {...register("image")}
            />
        </div>
        <button className="btn btn-success">Thêm mới</button>
    </form>
}

export default UpdateCategory