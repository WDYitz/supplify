import { getMockData } from "@/actions/get-mock-data"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const StockPagination = async () => {
  const productsMock = await getMockData()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: productsMock.length }, (_, index) => {
          return (
            <PaginationItem key={index + 1}>
              <PaginationLink href="#">{index + 1}</PaginationLink>
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