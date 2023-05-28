
const Newletter = () => {
  return (
    <div className="w-4/5 pt-16 text-white border-b border-white mx-auto">
        <div className="max-w-[1240] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4 px-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-5">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className='my-3'>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-2 flex w-full rounded-md text-black mx-5" type="email" placeholder="Enter Email"/>
                    <button className="bg-[#00df9a] w-[200px] rounded-full font-medium my-6 mx-2 py-3 text-black ">Click to start</button>
                </div>
                <p className="px-4">Lorem ipsum dolor  .  <span className="text-[#00df9a]">Lorem, ipsum.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newletter