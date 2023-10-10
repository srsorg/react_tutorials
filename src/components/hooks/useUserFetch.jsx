import React from 'react'
import { useEffect } from 'react'

function useUserFetch(url) {
  const [users, setUsers] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        //console.log(response)
        const users = await response.json()
        //console.log(users)
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return { users }
}

export default useUserFetch
