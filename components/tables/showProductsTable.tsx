"use client"
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { getProductsSchema } from "@/app/(Admin)/admin/_Schemas/getProductSchema";
import { formatDate } from './../../lib/Formatters';
import { formatCurrency } from '@/lib/Formatters';
import { Check, X, GripVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../UI/dropdown-menu";
import { useState, useTransition } from "react"
import { deleteProduct, toggleProductAvailability } from "@/app/(Admin)/admin/_actions/product";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog"
import { Button } from "@/components/UI/button"
import Link from "next/link";


export default function ShowProductsTable(
 { products}: {products: z.infer<typeof getProductsSchema>}
) {

  const [isPending, startTransition] = useTransition()
  
  return (
    <div className="grid place-items-center my-8">
    <div className="w-11/12">
    <h1 className="font-bold text-4xl justify-self-start p-10">
        Products
        </h1>
    <Table className="w-full my-10 px-4 bg-white ">
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Index</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {products.length ? products.map((product , index) =>  
          (<TableRow key={product.name}>
            <TableCell className="font-medium">{index + 1 }.</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.isAvailableForPurchase ? <Check/> : <X/>}</TableCell>
            <TableCell>{formatCurrency(product.priceInCents)}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>{formatDate(product.createdAt)}</TableCell>
            <TableCell>{formatDate(product.updatedAt)}</TableCell>
            <TableCell >
            <Dialog >
  
  <DropdownMenu modal={false}>
  <DropdownMenuTrigger><GripVertical/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Product</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href={`/admin/edit_modal/${product.name}`}><DropdownMenuItem>Edit</DropdownMenuItem></Link>
    <DropdownMenuItem onClick={() =>{startTransition(()=>toggleProductAvailability(product.name))}}>{product.isAvailableForPurchase ? "deactivate" : "activate"}</DropdownMenuItem>
    <DialogTrigger  asChild> 
      <DropdownMenuItem variant="destructive" onSelect={(event) => { event.preventDefault()  }}>Delete</DropdownMenuItem>
    </DialogTrigger>
    {/* delete product dialog content */}
<DialogContent className="p-6 h-48 ">
<DialogHeader>
</DialogHeader>
<DialogDescription>
<DialogTitle>
Are you sure you want to delete {product.name}?
</DialogTitle>
</DialogDescription>
<DialogFooter className="flex w-full  justify-between">
<DialogClose  asChild><Button variant="noShadow" className="bg-white" onClick={() =>{startTransition(()=>deleteProduct(product.name, product.imagePath, product.filePath))}}>ok</Button></DialogClose>
<DialogClose  asChild><Button variant="noShadow" className="bg-white">cancel</Button></DialogClose>

</DialogFooter>
</DialogContent>
  </DropdownMenuContent>
</DropdownMenu>

</Dialog>
</TableCell>
          </TableRow>
        )) : <p className="text-center">no products found</p>}
        
      </TableBody>
    </Table>
    </div>
    </div>
  );

}

//A curated collection of biology notes that covers every chapter in the A Levels Biology syallabus.
//app\(Admin)\admin\edit_modal\[name]\page.tsx