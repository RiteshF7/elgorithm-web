import { createContext } from "react"

export const CourseContext = createContext({
})

export const CourseProvider = () => {
  return (
    <CourseContext.Provider value={{}}>

    </CourseContext.Provider>
  )
}