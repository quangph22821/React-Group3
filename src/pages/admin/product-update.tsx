import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { updateForm, updateSchema } from '../../models';
import { getById, update } from '../../api/product';
import { getAllCate } from '../../api/category';



const ProductUpdate = () => {
  const { id } = useParams()
  const [dataUpdate, setDataupdate] = useState([]);
  const [category,setcategory] = useState([]);
  const navigate = useNavigate()
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id)
      }
    }
  })

  useEffect(() => {
    getAllCate().then((data)=>setcategory(data))
  }, [])

  console.log("cate",category);
  const onSubmit = async (data: updateForm) => {
    try {
      if (id) {
        const response = await update(id, data)
        console.log(response);
        navigate('/admin')
      }
    } catch (err) {
      console.log(err);

    }

  }

  const fetchProductById = async (id: string) => {
    const { data } = await getById(id)
    setDataupdate(data)
  }




  useEffect(() => {
    if (id) {
      fetchProductById(id)
    }
  }, [])

  return <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">

        </div>

        <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
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
                <label>Giá</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("price")}
                  defaultValue={dataUpdate?.data?.price}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                  {errors.price && errors.price.message}
                </p>
              </div>

              {/* <div>
                <label>Giảm giá</label>
                
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("color")}
                  type="text"
                />
                <p className='text-red-600 text-[10px]'>
                {errors.color && errors.color.message}
              </p>
              </div> */}
              {/* <div>
                  <label className="">
                    Category
                  </label>

                  <select
                    id="HeadlineAct"
                    // {...register("category_Id")}
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm "
                  >
                    {category.map((item) => {
                      return (
                        <option value={item._id}>{item.name}</option>
                      )
                    })}

                  </select>
                </div> */}
              {/* <div>
                <p>Size</p>
                <select name="" id="">
                  {dataUpdate?.data?.size?.map((item) => {
                    return (
                      <option value="39">{item?.name}</option>
                    )
                  })}

                </select>
              </div> */}

              {/* <div>
                <p>Color</p>
                <select name="" id="">
                  {dataUpdate?.data?.color?.map((item) => {
                    return (
                      <option value="">{item?.name}</option>
                    )
                  })}

                </select>
              </div> */}
               <div>
                <p>Loại</p>
                <select {...register('category_Id')}>
                  {category?.data?.data?.map((item: any) => {

                    return (
                      <option value={item._id}>{item?.name}</option>
                    )

                  })}

                </select>
              </div>



            </div>


            <div>
              <label>Mô tả</label>

              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("description")}
                defaultValue={dataUpdate?.data?.description}
              ></textarea>
              <p className='text-red-600 text-[10px]'>
                {errors.description && errors.description.message}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cập nhật
              </button>
            </div>
            {/* {JSON.stringify(errors)} */}
          </form>
        </div>
      </div>
    </div>
  </section>

}

export default ProductUpdate