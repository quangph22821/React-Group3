import * as Yup from 'yup'
export interface ICategory {
    _id: string,
    name: string,
    image: string

}

export const updateCategorySchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    image: Yup.string().required("Trường dữ liệu bắt buộc"),
    
})

export type updateFormCategory = Yup.InferType<typeof updateCategorySchema>