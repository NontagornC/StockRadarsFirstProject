import pic1 from '../../assets/pic1.png'
import { Link } from 'react-scroll';


const HeroPage = () => {
  return (
    <div className='w-full h-screen mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>Growing with Stock Analy</p>
          <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-white'>Stock Scanning </h1>
          <div>
            <p className='md:text-2xl sm:text-2xl text-md font-bold text-white'>Fast, flexible financing for searching</p>
          </div>
          <Link to='stocklist' smooth={true} duration={800} offset={-80}>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
          <img src={pic1} alt="" className='w-[350px] sm:w-[400px] md:w-[500px]'/>
      </div>
    </div>
  )
}

export default HeroPage