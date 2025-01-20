"use client"
import { NewStockButton } from "@/components/NewStockButton"
import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addNewStockSchema } from "@/schemas/addNewStockSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Info, Plus } from "lucide-react"
import { useId, useState } from "react"
import type { UseFormReturn } from "react-hook-form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "../../ui/form"
import { Sheet, SheetClose, SheetContent } from "../../ui/sheet"
import { Tag, TagInput } from "emblor"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

/* 
* Refactor This component in the future !!!!!!!
*/

type StockFormType = z.infer<typeof addNewStockSchema>

const StockForm = () => {
  const [open, setOpen] = useState(false)

  const form = useForm<StockFormType>({
    resolver: zodResolver(addNewStockSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: ""
    },
  })

  const handleOpenForm = () => {
    setOpen(prev => !prev)
    if (!open) {
      form.reset()
    }
  }

  const handleOnSubmit = async () => { }

  return (
    <>
      <NewStockButton onClick={handleOpenForm} >
        Adicionar Estoque
        <Plus />
      </NewStockButton>
      <Sheet
        open={open}
        onOpenChange={handleOpenForm}
      >
        <SheetContent className="bg-[#161716]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 flex flex-col justify-between min-h-full">
              <div className="mt-12 space-y-6">
                <StockFormInputs form={form} />
              </div>
              <div className="flex gap-4">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full bg-transparent text-md font-bold h-10">Cancelar</Button>
                </SheetClose>
                <Button type="submit" variant="secondary" className="w-full h-10 text-background text-md font-bold">Criar</Button>
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  )
}

interface StockFormInputsProps {
  form: UseFormReturn<StockFormType, unknown, undefined>
}

const TAGS_MOCKUP = [
  {
    id: "1",
    text: "Grãos",
  },
  {
    id: "2",
    text: "Alimentos Refrigerados",
  }
]

const TAG_STYLES = {
  tagList: {
    container: "gap-1",
  },
  input:
    "rounded-lg transition-shadow placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-[#8257E5] mb-2 h-12",
  tag: {
    body: "relative h-9 bg-background border border-input hover:bg-background rounded-md font-medium text-sm ps-2 pe-7 flex-wrap",
    closeButton:
      "absolute -end-px p-0 rounded-s-none rounded-e-lg flex size-7 transition-colors outline-0  focus-visible:outline-2 focus-visible:ring-[#8257E5] text-muted-foreground/80 hover:text-foreground",
  },
}

const StockFormInputs = ({ form }: StockFormInputsProps) => {
  const id = useId()
  const [exampleTags, setExampleTags] = useState<Tag[]>(TAGS_MOCKUP);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl">Titulo</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Alimentos" {...field} className="h-12" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl">Descrição</FormLabel>
            <FormControl>
              <Textarea placeholder="Ex: Armazenamento de alimentos não pereciveis como milho, macarrão, soja..." {...field} className="h-12 px-4 max-h-28" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-2xl flex gap-2 items-center">
              Tags
              <Tooltip>
                <TooltipTrigger>
                  <Info width={22} className="hover:cursor-default" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="py-2">Pressione ENTER para adicionar a Tag</p>
                </TooltipContent>
              </Tooltip>
            </FormLabel>
            <FormControl>
              <TagInput
                {...field}
                id={id}
                tags={exampleTags}
                setTags={(newTags) => {
                  setExampleTags(newTags);
                }}
                placeholder="Adicionar Tag"
                styleClasses={TAG_STYLES}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
                inlineTags={false}
                inputFieldPosition="top"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export {
  StockForm
}

