import { useNavigate } from "react-router"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
        <a href="#" onClick={()=> navigate(`/`)}>Home</a>
        <a href="#" onClick={()=> navigate(`/signup`)}>Sign Up</a>
        <a href="#" onClick={()=> navigate(`/singleStock`)}>Home</a>
    </nav>
  )
}

export default Navbar