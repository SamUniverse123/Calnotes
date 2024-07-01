
import { z } from "zod"

const MAX_FILE_SIZE = 5000000;



const filesSchema = typeof window === 'undefined' ? z.any() : z.instanceof(FileList, {message: "files are required"}).refine((fileList)=> fileList.length > 0 ,{message: "no files are selected"})
//.transform((fileList)=> fileList?.item(0)).refine((file) => {file?.size > 0}, {message:"required"})
const imageSchema =  z.instanceof(File, { message: "Required" }).refine( file => file.size === 0 || file.type.startsWith("image/")).refine((file) => file.size <= MAX_FILE_SIZE, {message: "Max file size is 5MB"})//.refine((file)=>{file !== null},{message: "no files detected"}).refine((file)=>file.size === 0 || file.type.startsWith("image/") ,{message: "The file has to be an image"}).refine((file) => file.size <= MAX_FILE_SIZE, {message: "Max file size is 5MB"})
//: 


//Zod Schema for adding Products
const productSchema = z.object({
    productName: z.string().min(1  ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    description: z.string().min(1 ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    priceInCents: z.coerce.number().int().min(1 ,{message: "required"}),
    files: filesSchema,
    imageFile: imageSchema

})


const productSchemaSS = z.object({
    productName: z.string().min(1  ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    description: z.string().min(1 ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    priceInCents: z.coerce.number().int().min(1 ,{message: "required"}),
    imageFile: imageSchema

})

const filesSchemaSS = z.instanceof(File, {message:"no files are found"}).array().nonempty()







export { productSchema,  productSchemaSS , filesSchemaSS}