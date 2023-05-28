import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const navigate = useNavigate()
  const [nav,setNav] = useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className="w-full text-3xl text-[#00df9a] font-bold p-4">StockScanning</h1>

      <ul className='hidden md:flex' >
          <li className='text-xl p-8 font-bold'>
            <a href="#" onClick={()=> navigate(`/`)}>Homepage</a>
          </li>
      </ul>

      <div onClick={()=>handleNav()} className="block md:hidden">
          {!nav? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700 px-4 py-4 text-white' : 'fixed left-[-100%]'}>
          <h1 className="w-full text-3xl text-[#00df9a] font-bold p-4">StockScanning</h1>
          <ul className='uppercase p-4'>
            <li className='text-xl p-8 font-bold'>  
              <a href="#" onClick={()=> navigate(`/`)}>Homepage</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar