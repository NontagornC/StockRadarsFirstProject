import pic1 from '../../assets/pic1.png'

const HeroPage = () => {
  return (
    <div className='w-full h-screen mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>Growing with Data Anal</p>
          <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold md:py-6 text-white'>Grow with Data</h1>
          <div>
            <p className='md:text-4xl sm:text-3xl text-lg font-bold text-white'>Fast, flexible financing for</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      <div className='flex flex-col items-center justify-center'>
          <img src={pic1} alt="" className='w-[350px] sm:w-[500px]'/>
      </div>
    </div>
  )
}

export default HeroPage