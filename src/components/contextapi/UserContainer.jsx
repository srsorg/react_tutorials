import { useNavbarContext } from './Navbar'
import { useAppContext } from '../../GlobalContext'

const UserContainer = () => {
  const { user, logout } = useNavbarContext()

  //console.log(user)

  const { appValue } = useAppContext()
  console.log(appValue)
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>
            Hello There,
            {user.name.toUpperCase()}
          </p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}
export default UserContainer
