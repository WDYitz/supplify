"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";

export const transactionsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "details",
    header: "",
    cell: () => {
      return (
        <Button variant="outline">
          <SearchIcon />
        </Button>
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
      new Date(product.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
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
];