import { useEffect, useState } from "react"

interface IUseDebounce {
  value: string
  delay: number
}

export const useDebounce = ({ value, delay = 500 }: IUseDebounce) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(id)
  }, [value, delay])

  return debounceValue
}
