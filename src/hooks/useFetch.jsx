import { useState, useEffect } from "react"
import fetchData from "../services/fetchData"
import modelData from "../services/modelData"

export default function useFetch(userId, dataSource) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData(userId, dataSource)
      .then(result => {
        setIsLoading(result.loading)
        setIsError(result.error)
        setData(modelData(result.data))
      })
  }, [userId, dataSource])

  return { isLoading, isError, data }
}