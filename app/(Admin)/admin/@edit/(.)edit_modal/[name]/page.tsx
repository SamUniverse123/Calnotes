"use client"
import{
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/UI/card"

import {Dialog, DialogContent} from "@/components/UI/dialog"
import EditModal from "@/components/cards/EditModal"
import { findAllProducts, findProduct, findProductURL } from "../../../_actions/product"
import { useRouter } from "next/navigation"
import { Button } from "@/components/UI/button"



// export async function generateStaticParams(){

//     const products = await findAllProducts()
//     return products.map((product)=>({name: product.name}))
// }



export default async function page({params}: {params: { name: string }}){
    const {name} = params

    
   
    const router = useRouter()
    return(
      <Dialog  open={true} onOpenChange={() => router.back()}>
      <DialogContent className="w-1/6">
          <Card>
      <h1>{name}</h1>
      <Button onClick={() => router.back()}>cancel</Button> 
      </Card>
  </DialogContent>
</Dialog>
    )
}