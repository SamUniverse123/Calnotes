"use client";
import { addProducts } from "@/app/(Admin)/admin/_actions/product";
import { productSchema } from "@/app/(Admin)/admin/_Schemas/formSchemas";
import { Button } from "@/components/UI/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
  FormDescription,
} from "@/components/UI/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../UI/input";
import { Textarea } from "../UI/textarea";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/Formatters";

export default function AddProductsForm(): React.JSX.Element {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      description: "",
      priceInCents: 0,
    },
  });

  const filesRef = form.register("files");
  const imageRef = form.register("imageFile");

  const onSubmit = (data: z.infer<typeof productSchema>) => {
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("description", data.description);
    formData.append("priceInCents", data.priceInCents.toString());

    for (const file of data.files) {
      formData.append("files", file);
    }

    formData.append("imageFile", data.imageFile);

    for (const data of formData.entries()) {
      console.log(data);
    }

    console.log(formData.getAll("files"));

    addProducts(formData);
  };

  const { isSubmitting, isSubmitSuccessful, isValid } = form.formState;

  function getValues(arg0: string): any {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="grid place-items-center my-8">
      <div className="w-1/2">
        <h1 className="font-bold text-4xl justify-self-start pb-10">
          New Product Form
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  bg-white p-6   border-2 border-black"
          >
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem className="relative pb-4">
                  <FormLabel className="block pb-1.5">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product name"
                      disabled={isSubmitSuccessful}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="relative pb-4">
                  <FormLabel className="block pb-1.5">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      disabled={isSubmitSuccessful}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceInCents"
              render={({ field }) => (
                <FormItem className="relative pb-4">
                  <FormLabel className="block pb-1.5">Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Price"
                      type="number"
                      disabled={isSubmitSuccessful}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {formatCurrency(form.getValues("priceInCents"))}
                  </FormDescription>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem className="relative pb-4 ">
                  <FormLabel className="block pb-1.5">Files</FormLabel>
                  <FormControl>
                    <Input
                      multiple
                      type="file"
                      disabled={isSubmitSuccessful}
                      {...filesRef}
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageFile"
              render={({ field }) => (
                <FormItem className="relative pb-4 ">
                  <FormLabel className="block pb-1.5">Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      disabled={isSubmitSuccessful}
                      {...field}
                      value={undefined}
                      onChange={(e) => {
                        field.onChange(e.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isSubmitting || (isSubmitSuccessful && isValid)}
            >
              {(!isSubmitting && !isSubmitSuccessful) || !isValid ? "Add" : ""}
              {isSubmitting ? "Saving" : ""}
              {isSubmitSuccessful && isValid ? "Added" : ""}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
