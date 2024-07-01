
import ShowProductsTable from "@/components/tables/showProductsTable";
import { findAllProducts } from "./_actions/product";









export default async function page(){
    const products = await findAllProducts()

    console.log(products)
    return(
        <ShowProductsTable products={products}/>
    )
    
}