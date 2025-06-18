"use client";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { ProductsDetails } from "@/app/stock/_components/ProductDetails";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "details",
    header: "Detalhes",
    cell: ({ row: { original: product } }) => {
      return <ProductsDetails data={product} />;
    }
  },
  {
    accessorKey: "name",
    header: "Produto",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.name}
        </div>
      );
    }
  },
  {
    accessorKey: "productCode",
    header: "Código Prod",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.productCode}
        </div>
      );
    }
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.id}
        </div>
      );
    }
  },
  {
    accessorKey: "qtyInStock",
    header: "Qtd",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.qtyInStock}
        </div>
      );
    }
  },
  {
    accessorKey: "tag",
    header: "Tag",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.tag}
        </div>
      );
    }
  },
  {
    accessorKey: "createdAt",
    header: "Adicionado há",
    cell: ({ row: { original: product } }) =>
      dayjs().to(product.createdAt)
  },
  {
    accessorKey: "expirationDate",
    header: "Validade",
    cell: ({ row: { original: product } }) =>
      new Date(product.expirationDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "unitPrice",
    header: "Preço unitário",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {"R$ " + product.unitPrice}
        </div>
      );
    },
  },
  {
    accessorKey: "barcode",
    header: "Código de Barras",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.barcode}
        </div>
      );
    },
  },
  {
    accessorKey: "classification",
    header: "Classificação",
    cell: ({ row: { original: product } }) => {
      return (
        <div className="space-x-1">
          {product.classification}
        </div>
      );
    },
  },
  {
    accessorKey: "Actios",
    header: "Ações",
    cell: () => {
      return (
        <div className="flex gap-4">
          <Button variant="outline">
            <Edit size="15" />
          </Button>
          <Button variant="outline">
            <Trash size="15" />
          </Button>
        </div>
      );
    }
  },
];