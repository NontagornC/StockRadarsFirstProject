import { propData } from "../../utils/model";
import { useLocation } from "react-router-dom";

const SingleStock = ({ data }: propData) => {
  const location = useLocation();
  const name = location.state?.name;
  const singleStock = data.filter((item) => item.N_name === name);
  const formatNumber = (num: number | null): string => {
    if (num === null) {
      return "-";
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-700 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#00DF9A] pt-3">{singleStock[0]?.N_name}</h1>
        <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-[#4CA599]">{singleStock[0]?.N_COMPANY_T}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-slate-600 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2 text-[#00DF9A]">Business Type (English)</h2>
            <p className="text-white">{singleStock[0]?.N_BUSINESS_TYPE_E}</p>
          </div>
          <div className="bg-slate-600 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2 text-[#00DF9A]">Business Type (Thai)</h2>
            <p className="text-white">{singleStock[0]?.N_BUSINESS_TYPE_T}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2 text-[#00DF9A]">Company Name</h2>
          <p className='text-white'>{singleStock[0]?.N_COMPANY_E}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2 text-[#00DF9A]">Website</h2>
          <a href={singleStock[0]?.N_URL} className="text-white hover:underline hover:text-blue-600">
            {singleStock[0]?.N_URL}
          </a>
        </div>
        <div className="mt-8 pb-3">
          <h2 className="text-lg font-bold mb-2 text-[#00DF9A]">Market Cap</h2>
          <p className="text-white">{singleStock[0]?.marketcap !== undefined ? `${formatNumber(singleStock[0]?.marketcap)} THB` : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleStock;
