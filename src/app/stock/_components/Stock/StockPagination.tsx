import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { productsMock } from "@/mocks/product"

const StockPagination = () => {
  const productsQuantity = productsMock.length / 2
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: productsQuantity }, (_, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink href="#">{index}</PaginationLink>
            </PaginationItem>
          )
        })
        }
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
export default StockPagination