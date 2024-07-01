"use server";

import { promise, unknown, z } from "zod";
import {
  productSchema,
  productSchemaSS,
  filesSchemaSS,
} from "../_Schemas/formSchemas";
import fs from "fs/promises";
import db from "@/Server/db/db";
import { productsTable } from "@/Server/db/Schema";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { eq, not } from "drizzle-orm";
import path from "path";
import { getProductsSchema, getProductSchema } from "../_Schemas/getProductSchema";

//finding products for filling default values on the edit product form
async function findProduct(name: string) {
  try{const productFromDB = await db.query.productsTable.findFirst({
    where: (productsTable, { eq }) => eq(productsTable.name, name),
  });

  const product = getProductSchema.safeParse(productFromDB)

  if(product.success === false){
    console.log({ message: `product queried from DB fails validation.${product.error}` });
    notFound()
  }
  
  return product.data;}
  catch(err){
    throw new Error(`failed to get  product: ${err}`);
  }
  
}
//.split('%20').join(' ')

async function findProductURL(name: string) {
  const filteredName = name.split('%20').join(' ')
  try{
    const productFromDB = await db.query.productsTable.findFirst({
    where: (productsTable, { eq }) => eq(productsTable.name, filteredName),
  });

  const product = getProductSchema.safeParse(productFromDB)

  if(product.success === false){
    console.log({ message: `product queried from DB fails validation.${product.error}` });
    notFound()
  }
  
  return product.data;}
  catch(err){
    throw new Error(`failed to get product: ${err}`);
  }
  
}


//querying all products
async function findAllProducts(): Promise<z.infer<typeof getProductsSchema>> {
  try{
    const productList = await db.query.productsTable.findMany()
    console.log(productList)
    const products = getProductsSchema.safeParse(productList)
    
    if (products.success === false) {
      console.log({ message: `New product fails validation.${products.error}` });
      notFound()
    }

    return products.data

  }
  catch(err){
    throw new Error(`failed to get all products: ${err}`);
  }

  
}



// get product files for edit product form
async function getFile(filePath: string) {
  try {
    const productFolder = await fs.readdir(filePath);
    return productFolder;
  } catch (error) {
    throw new Error(`failed to get product file: ${error}`);
  }
}


async function toggleProductAvailability(productName: string){
    try{
        await db.update(productsTable)
        .set({ isAvailableForPurchase : not(productsTable.isAvailableForPurchase) })
        .where(eq(productsTable.name, productName));
  
        revalidatePath("/admin")

    }
    catch (error) {
      throw new Error(`failed to get product file: ${error}`);
    }
}





//delete a product
async function deleteProduct(productName: string, imagePath: string, filePath: string){
  try{
      await fs.rmdir(filePath,{recursive: true})
      await fs.unlink(imagePath)      


      await db.delete(productsTable).where(eq(productsTable.name, productName))

      revalidatePath("/admin")

  }catch(error){
    throw new Error(`failed to get product file: ${error}`);
  }


}














// submit handler for adding products
async function addProducts(data: FormData) {
  //function addProducts (data ,schema)
  //validationg with schema
  //create folder
  //create file
  //add to database
  //revalidating product-form page and product lists page
  const fileList = data.getAll("files");
  data.delete("files");

  const result = productSchemaSS.safeParse(Object.fromEntries(data));
  const files = filesSchemaSS.safeParse(fileList);

  if (result.success === false) {
    console.log({ message: `New product fails validation.${result.error}` });
    return result.error.formErrors.fieldErrors;
  }

  console.log(result);
  console.log(files);

  //create folders

  await fs.mkdir("products", { recursive: true });
  const productFolderPath = path.join("products", result.data.productName);
  await fs.mkdir(productFolderPath, { recursive: true });

  //create files
  try {
    for (const file of files.data!) {
      const filePath = path.join(
        "products",
        result.data.productName,
        `${crypto.randomUUID()}-${file.name}`,
      );
      console.log(filePath);
      await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    }
  } catch (error) {
    throw new Error(`failed to add product: ${error}`);
  }

  //create image file

  await fs.mkdir("public/Imgproducts", { recursive: true });
  const imagePath = path.join(
    "public/Imgproducts",
    `${crypto.randomUUID()}-${result.data.imageFile.name}`,
  );

  await fs.writeFile(
    imagePath,
    Buffer.from(await result.data.imageFile.arrayBuffer()),
  );
  console.log("Writing image file:", {
    imagePath,
    imageFileType: typeof result.data.imageFile,
    imageFileArrayBufferType:
      typeof (await result.data.imageFile.arrayBuffer()),
  });

  //add product to database
  try {
    await db.insert(productsTable).values({
      name: result.data.productName,
      priceInCents: result.data.priceInCents,
      filePath: productFolderPath,
      imagePath: imagePath,
      description: result.data.description,
      isAvailableForPurchase: true,
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error(`failed to add product: ${error}`);
  }

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin");

  // redirect("/admin");
}

// submit handler for editing products
async function editProducts(data: FormData, name: string) {
  //validate the form contents
  //query the product from database using the provided name
  //update the database and filesystem with the new product
  //revalidate path

  const fileList = data.getAll("files");
  data.delete("files");
  try {
    const result = productSchemaSS.safeParse(Object.fromEntries(data));
    const files = filesSchemaSS.safeParse(fileList);

    if (result.success === false) {
      console.log({ message: "New product fails validation." });
      return result.error.formErrors.fieldErrors;
    }

    const product = await db.query.productsTable.findFirst({
      where: (productsTable, { eq }) => eq(productsTable.name, name),
    });

    if (product == null) {
      return notFound();
    }

    await db
      .update(productsTable)
      .set({ name: result.data.productName })
      .where(eq(productsTable.name, name));

    revalidatePath("/");
    revalidatePath("/products");
    revalidatePath("/admin");

    redirect("/admin");
  } catch (error) {
    throw new Error(`failed to edit product: ${error}`);
  }
}

export { addProducts, editProducts, findProduct, findAllProducts, getFile, toggleProductAvailability, deleteProduct, findProductURL};
//function editProducts
//validationg with schema
//query the product with the products name
//update file
//update database
//revalidating product-form page and product lists page
