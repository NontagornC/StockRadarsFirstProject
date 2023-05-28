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
    <div className="flex justify-center bg-white py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#00DF9A] text-3xl sm:text-4xl font-bold mb-6">{singleStock[0]?.N_name}</h1>
        <p className="text-[#00df9893] text-xl sm:text-2xl font-medium mb-6">{singleStock[0]?.N_COMPANY_T}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-black text-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Business Type (English)</h2>
            <p>{singleStock[0]?.N_BUSINESS_TYPE_E}</p>
          </div>
          <div className="bg-black text-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Business Type (Thai)</h2>
            <p>{singleStock[0]?.N_BUSINESS_TYPE_T}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Company Name</h2>
          <p>{singleStock[0]?.N_COMPANY_E}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Website</h2>
          <a href={singleStock[0]?.N_URL} className="text-blue-600 hover:underline">
            {singleStock[0]?.N_URL}
          </a>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Market Cap</h2>
          <p>{singleStock[0]?.marketcap !== undefined ? formatNumber(singleStock[0]?.marketcap) : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleStock;
