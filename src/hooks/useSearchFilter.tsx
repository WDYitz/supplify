"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const useSearchFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams();
  const { replace } = useRouter();

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.currentTarget.value;

    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onFilterClear = () => {
    Array.from(params.keys()).forEach(key => params.delete(key));
  };

  return {
    onSearch,
    onFilterClear
  };
};

export default useSearchFilter;
