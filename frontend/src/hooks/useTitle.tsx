import { useEffect } from "react"

interface UseTitleProps {
  title: string,
  breadcrumb: string[]
}

const useTitle = ({ title, breadcrumb }: UseTitleProps) => {
  useEffect(() => {
    document.title = title
  }, [title])

  const breadcrumbitems = breadcrumb && breadcrumb.map((item, index) => ({
    key: index,
    title: item,
    // link: breadCrumb.slice(0, index + 1).join('/')
  }))

  return breadcrumbitems
}

export default useTitle