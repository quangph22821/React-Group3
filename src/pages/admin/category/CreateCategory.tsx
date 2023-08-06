import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAddCategoryMutation } from '../../../service/category.service'

type addCategoryForm = {
    _id:string
    name: string,   
    image : string
}

const CreateCategory = () => {
    const {handleSubmit, formState: {errors} , register} = useForm<addCategoryForm>()
    const [addCategory] = useAddCategoryMutation()
    const navigate = useNavigate()
    const onSubmit = (data: addCategoryForm) => {
       try{
            console.log(data);
            addCategory(data)
            navigate('/admin/category')
       }catch(error){
            console.log(error);
            
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

export default CreateCategory