// App.js
import './App.css'
import { useState, useEffect } from 'react'
import fetchData from './utils/fetchData'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import SingleStock from './components/Home/SingleStock'
import { rawData } from './utils/model'

function App() {
  const [data, setData] = useState<rawData>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetch = () => {
      fetchData('https://stockradars.co/assignment/data.php')
        .then((result: any) => {
          console.log(result.data);
          setData(result.data);
        })
        .catch((error: any) => {
          console.error(error);
        });
    };

    fetch();
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/singleStock/:name' element={<SingleStock data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
