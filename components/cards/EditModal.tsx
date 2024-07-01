"use client"
import { Button } from "../UI/button";
import { useRouter } from "next/navigation";
import { getProductSchema} from "@/app/(Admin)/admin/_Schemas/getProductSchema";
import { useEffect } from "react";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { Card } from "../UI/card";



export default function EditModal({name}: {name: string} ){
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