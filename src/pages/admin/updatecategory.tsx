import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate, useParams } from "react-router-dom"
import { updateCategorySchema } from '../../models';
import { updateCategoryForm } from "../../models";
import { categorygetById, updateCategory } from "../../api/category";
import { useEffect, useState } from "react";

const CategoryUpdate = () => {
  const {id} = useParams();
  const [dataUpdate, setDataupdate] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<updateCategoryForm>({
    resolver: yupResolver(updateCategorySchema),
    defaultValues: async () => {
      if (id) {
        return await categorygetById(id)
      }
    }
  })

  const onSubmit = async (data: updateCategoryForm) => {
    try {
      if (id) {
        const response = await updateCategory(id, data)
        navigate('/admin/category')
        console.log(response );
        
      }

    } catch (error) {

    }
  }

  const fetProductById = async (id: string) => {
    const { data } = await categorygetById(id)
    setDataupdate(data)
    console.log("dd",dataUpdate);
    
  }

  useEffect(() => {
    if (id) {
      fetProductById(id)
    }
  }, [])


  return (
    <>
      <div className="container">
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
              {...register("name")}
              defaultValue={dataUpdate?.data?.name}

            />  
            <p className='text-red-600 text-[10px]'>
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label>Ảnh</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("image")}
                defaultValue={dataUpdate?.data?.image}
                type="text"
              />
              <p className='text-red-600 text-[10px]'>
                {errors.image && errors.image.message}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CategoryUpdate