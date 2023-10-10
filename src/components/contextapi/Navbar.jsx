import { useState, createContext, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Navbar'

export const NavbarContext = createContext()

export const useNavbarContext = () => useContext(NavbarContext)

const Navbar = () => {
  // first create

  const [user, setUser] = useState({ name: 'bob' })
  //  console.log(user)
  const logout = () => {
    setUser(null)
  }
  return (
    <Wrapper>
      <NavbarContext.Provider value={{ user, logout }}>
        <div className="nav-center">
          <span className="logo">Hari React/Vite/GraphQl/Apollo Tutotials</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/arraylist" className="nav-link">
              Array
            </NavLink>
            <NavLink to="/hookuseff" className="nav-link">
              Hooks-useEffect
            </NavLink>
            <NavLink to="/graphqlbas" className="nav-link">
              GraphQL-Basics
            </NavLink>
          </div>
        </div>
      </NavbarContext.Provider>
    </Wrapper>
  )
}
export default Navbar
