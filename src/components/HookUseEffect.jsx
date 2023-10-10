import React from 'react'
import { useEffect } from 'react'
import useUserFetch from './hooks/useUserFetch'

function HookUseEffect() {
  const usersUrl = 'https://api.github.com/users'
  const users = useUserFetch(usersUrl).users

  //const [users, setUsers] = React.useState([])
  const [fvalue, setFvalue] = React.useState(0)
  const [svalue, setSvalue] = React.useState(0)

  useEffect(() => {
    console.log('first button clicked')
  }, [fvalue])

  useEffect(() => {
    console.log('second button clicked')
  }, [svalue])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(usersUrl)
  //       //console.log(response)
  //       const users = await response.json()
  //       //console.log(users)
  //       setUsers(users)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <div>
      <h1>{fvalue}</h1>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setFvalue((currentValue) => {
            return currentValue + 1
          })
        }}
      >
        First
      </button>
      <h1>{svalue}</h1>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setSvalue((currentValue) => {
            return currentValue + 1
          })
        }}
      >
        second
      </button>
      <section>
        <h3>github users</h3>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default HookUseEffect
