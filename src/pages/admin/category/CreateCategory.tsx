import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAddCategoryMutation } from '../../../service/category.service'
import { toast } from "react-toastify"

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
            toast.success(`Thêm mới sản phẩm thành công`, {
                position: "bottom-left",
    
            })
       }catch(error){
            console.log(error);
            
       }
        
        
    }   

    return <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Thêm mới danh mục sản phẩm</h1>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"  className="form-control" placeholder="" aria-describedby="helpId"
            {...register("name", 
            {
                required: "Dữ liệu không được để trống",
            })}
            />
            <div className="text-red-500">{errors.name && errors.name.message}</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="text"  className="form-control" placeholder="" aria-describedby="helpId" 
           {...register("image", 
           {
               required: "Dữ liệu không được để trống",
           })}
            />
           <div className="text-red-500">{errors.image && errors.image.message}</div>
        </div>
        <button className="btn btn-success">Thêm mới</button>
    </form>
}

export default CreateCategory