"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { productFilterSchema } from "@/schemas/productFilterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type productFilterSchema = z.infer<typeof productFilterSchema>;

export const ProductFilterForm = () => {
  const form = useForm<productFilterSchema>({
    resolver: zodResolver(productFilterSchema),
    defaultValues: {
      search: "",
      price: {
        min: "",
        max: "",
      },
      qtd: {
        min: "",
        max: "",
      },
      classification: { A: false, B: false, C: false },
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="Valor unitário">
            <AccordionTrigger>
              <Label className="underline-none text-md">Valor Unitário</Label>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 mb-4">
              <FormField
                control={form.control}
                name="price.min"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormLabel htmlFor="min-price" className="w-1/4">
                      Mín
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 10..."
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.currentTarget.value);
                        }}
                        id="min-price"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price.max"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormLabel htmlFor="max-price" className="w-1/4">
                      Máx
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 100..."
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.currentTarget.value);
                        }}
                        id="max-price"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Quantidade">
            <AccordionTrigger>
              <Label className="underline-none text-md">Quantidade</Label>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 mb-4">
              <FormField
                control={form.control}
                name="qtd.min"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormLabel htmlFor="min-qtd" className="w-1/4">
                      Mín
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 20..."
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.currentTarget.value);
                        }}
                        id="min-qtd"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="qtd.max"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormLabel htmlFor="max-qtd" className="w-1/4">
                      Máx
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 250..."
                        value={field.value}
                        onChange={field.onChange}
                        id="max-qtd"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Classificação">
            <AccordionTrigger>
              <Label className="underline-none text-md">Classificação</Label>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <FormField
                    control={form.control}
                    name="classification.A"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-center gap-2">
                        <FormControl>
                          <Toggle
                            id="classificationA"
                            className="w-8 h-8"
                            pressed={field.value}
                            onPressedChange={() => {
                              field.onChange(!field.value);
                            }}
                          >
                            A
                          </Toggle>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="classification.B"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-center gap-2">
                        <FormControl>
                          <Toggle
                            id="classificationB"
                            className="w-8 h-8"
                            pressed={field.value}
                            onPressedChange={() => {
                              field.onChange(!field.value);
                            }}
                          >
                            B
                          </Toggle>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="classification.C"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-center gap-2">
                        <FormControl>
                          <Toggle
                            id="classification"
                            className="w-8 h-8"
                            pressed={field.value}
                            onPressedChange={() => {
                              field.onChange(!field.value);
                            }}
                          >
                            C
                          </Toggle>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2 pb-4 text-xs">
                  <span>A - Baixo volume de consumo</span>
                  <span>B - Consumo Moderado</span>
                  <span>C - Alto volume de consumo</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  );
};
