// StockList.js
import { propData } from "../../utils/model";
import { useNavigate } from "react-router-dom";

const StockList = ({ data }: propData) => {
  const formatNumber = (num: number | null): string => {
    if (num === null) {
      return '-';
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const navigate = useNavigate();

  return (
    <div id='stocklist' className='flex justify-center'>
      <div className='max-w-7xl'>
        <div className='overflow-x-auto'>
          <table className='bg-slate-700 text-sm sm:text-md md:text-lg w-full table-auto m-5'>
            <thead className='bg-[#00DF9A] font-bold'>
              <tr>
                <th className='text-center p-4 border border-white'>Ranking</th>
                <th className='text-center p-4 border border-white'>Short Name</th>
                <th className='text-center p-4 border border-white hidden md:block'>Full Name</th>
                <th className='text-center p-4 border border-white'>Market Cap</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {data.map((data, i): JSX.Element => {
                return (
                  <tr
                    key={i + 1}
                    className='hover:text-[#00DF9A] hover:transition-transform duration-500 hover:z-10 cursor-pointer'
                    onClick={() => navigate(`/singleStock/${data.N_name}`, { state: { name: data.N_name } })}
                  >
                    <td className='text-center p-4 border border-white'>{i + 1}</td>
                    <td className='text-center p-4 border border-white'>{data.N_name}</td>
                    <td className='text-center p-4 hidden md:block border border-white'>{data.N_fullname}</td>
                    <td className='text-center p-4 border border-white'>{data.marketcap !== undefined ? formatNumber(data.marketcap) : '-'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StockList;
