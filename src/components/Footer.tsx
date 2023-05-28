import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare 
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240] w-4/5 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
            <h1 className="w-full text-2xl text-[#00df9a] font-bold p-4">StockScanning.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, distinctio?</p>
            <div className="flex md:w-[75%] my-6 justify-between hover:cursor-pointer">
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-me text-gray-400">Lorem, ipsum.</h6>
                <ul>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                </ul>
            </div>
            <div>
                <h6 className="font-me text-gray-400">Lorem, ipsum.</h6>
                <ul>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                    <li className="py-2 text-sm">Lorem ipsum dolor sit.</li>
                </ul>
            </div>
            <div>
                <h6 className="font-me text-gray-400">Lorem, ipsum.</h6>
                <ul>
                    <li className="py-2 text-sm">Lorem ipsum </li>
                    <li className="py-2 text-sm">Lorem ipsum </li>
                    <li className="py-2 text-sm">Lorem ipsum </li>
                    <li className="py-2 text-sm">Lorem ipsum </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer