import { z } from "zod"
import {productSchema} from "./formSchemas"






const getProductsSchema = z.object({
    name: z.string().min(1  ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    description: z.string().min(1 ,{message: "required"}).max(256 ,{message: "Maximum word count reached"}),
    priceInCents: z.coerce.number().int().min(1 ,{message: "required"}),
    imagePath: z.string({message: "no image filepath found"}),
    filePath: z.string({message: "no filepath found"}),
    isAvailableForPurchase: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()

}).array()

const getProductSchema = getProductsSchema.element

export{ getProductsSchema, getProductSchema }